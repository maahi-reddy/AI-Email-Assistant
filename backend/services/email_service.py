import os
import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException


def send_email_via_brevo(to_email, subject, content):
    try:
        configuration = sib_api_v3_sdk.Configuration()
        configuration.api_key['api-key'] = os.getenv("BREVO_API_KEY")

        api_client = sib_api_v3_sdk.ApiClient(configuration)
        api_instance = sib_api_v3_sdk.TransactionalEmailsApi(api_client)

        sender = {
            "name": "AI Assistant",
            "email": os.getenv("SENDER_EMAIL")
        }

        email = sib_api_v3_sdk.SendSmtpEmail(
            to=[{"email": to_email}],
            sender=sender,
            subject=subject,
            html_content=content
        )

        print("🚀 Sending email via Brevo...")
        print("TO:", to_email)
        print("SUBJECT:", subject)

        response = api_instance.send_transac_email(email)

        print("✅ Brevo Response:", response)

        return {
            "success": True,
            "message_id": response.message_id
        }

    except ApiException as e:
        print("❌ Brevo API Error:", e)
        return {
            "success": False,
            "error": str(e)
        }

    except Exception as e:
        print("❌ General Error:", e)
        return {
            "success": False,
            "error": str(e)
        }
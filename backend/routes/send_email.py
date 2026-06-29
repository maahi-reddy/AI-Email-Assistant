from flask import Blueprint, request, jsonify
from services.gemini_service import generate_email
from services.email_service import send_email_via_brevo

# email_bp = Blueprint("email", __name__)
# @email_bp.route("/send-email", methods=["POST"])
# def send():
#     try:
#         data = request.get_json()

#         to_email = data.get("to_email")
#         subject = data.get("subject")
#         content = data.get("content")

#         if not to_email or not subject or not content:
#             return jsonify({
#                 "success": False,
#                 "error": "Missing fields"
#             }), 400

#         result = send_email(to_email, subject, content)

#         return jsonify(result)

#     except Exception as e:
#         return jsonify({
#             "success": False,
#             "error": str(e)
#         }), 500
send_bp = Blueprint("send_email", __name__)
@send_bp.route("/send_email", methods=["POST"])
def send():
    data = request.get_json()

    to_email = data.get("to_email")
    subject = data.get("subject")
    content = data.get("content")

    if not to_email or not subject or not content:
        return jsonify({
            "success": False,
            "error": "Missing fields"
        }), 400

    result = send_email_via_brevo(to_email, subject, content)

    return jsonify(result)
import os
from dotenv import load_dotenv
import google.generativeai as genai

from prompts.email_prompts import build_prompt

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_email(prompt, task, tone, length,subject):

    final_prompt = build_prompt(prompt, task, tone, length,subject)

    response = model.generate_content(final_prompt)

    text=response.text
    print("Gemini Response:")
    print(text)
    parts=text.split("Body:")
    subject=parts[0].replace("Subject:","").strip()
    body=parts[1].strip()

    return {
        "subject":subject,
        "email":body
    }

    # return response.text
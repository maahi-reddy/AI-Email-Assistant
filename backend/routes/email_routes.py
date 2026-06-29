from flask import Blueprint, request, jsonify

from services.gemini_service import generate_email
from services.email_service import send_email_via_brevo

email_bp = Blueprint("email", __name__)


@email_bp.route("/generate-email", methods=["POST"])
def generate():

    try:
        data = request.get_json()

        prompt = data.get("prompt", "")
        task = data.get("task", "Generate Email")
        tone = data.get("tone", "Professional")
        length = data.get("length", "Medium")
        subject = data.get("subject", "")
        to_email = data.get("to_email")   #  ADD THIS

        # 1️ Gemini generates email
        result = generate_email(prompt, task, tone, length, subject)

        # 3️ Return everything
        return jsonify(result)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500
# from flask import Flask
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route("/")
# def home():
#     return {"message": "AI Email Assistant Backend Running"}

# if __name__ == "__main__":
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import google.generativeai as genai
# from dotenv import load_dotenv
# import os

# load_dotenv()

# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# model = genai.GenerativeModel("gemini-2.5-flash")

# app = Flask(__name__)
# CORS(app)

# @app.route("/")
# def home():
#     return {"message": "AI Email Assistant Backend Running"}

# @app.route("/generate-email", methods=["POST"])
# def generate_email():
#     data = request.json
#     prompt = data.get("prompt", "")

#     response = model.generate_content(
#         f"Write a professional email for: {prompt}"
#     )

#     return jsonify({
#         "email": response.text
#     })

# if __name__ == "__main__":
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import google.generativeai as genai
# from dotenv import load_dotenv
# import os

# # Load .env file
# load_dotenv()

# # Configure Gemini
# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# # Create Gemini model
# model = genai.GenerativeModel("gemini-2.5-flash")

# # Create Flask app
# app = Flask(__name__)
# CORS(app)

# @app.route("/")
# def home():
#     return jsonify({"message": "AI Email Assistant Backend Running"})

# @app.route("/generate-email", methods=["POST"])
# def generate_email():
#     try:
#         data = request.get_json()
#         print("Received:", data)

#         prompt = data.get("prompt", "")

#         # response = model.generate_content(
#         #     f"Write a professional email for: {prompt}"
#         # )
#         response = model.generate_content(
#     f"""
# You are an intelligent AI Email Assistant.

# Your responsibilities include:
# - Writing new emails
# - Replying to emails
# - Summarizing long emails
# - Rewriting emails
# - Improving grammar
# - Changing tone (formal, friendly, professional, casual)
# - Creating email subject lines
# - Making emails concise or detailed

# Follow the user's request exactly.

# If writing a new email:
# - Generate an appropriate subject.
# - Generate the email body.

# If replying:
# - Write only the reply.

# If summarizing:
# - Return only the summary.

# If rewriting:
# - Return the rewritten version.

# User Request:
# {prompt}

# Return only the requested output without explanations.
# """
# )


#         return jsonify({
#             "email": response.text
#         })

#     except Exception as e:
#         print("ERROR:", e)
#         return jsonify({
#             "error": str(e)
#         }), 500

# if __name__ == "__main__":
#     app.run(debug=True)

# from flask import Flask
# from flask_cors import CORS

# from routes.email_routes import email_bp

# app = Flask(__name__)

# CORS(app, resources={r"/*": {"origins": "*"}})

# app.register_blueprint(email_bp)

# @app.route("/")
# def home():
#     return {"message": "AI Email Assistant Backend Running"}

# if __name__ == "__main__":
#     app.run(debug=True)
from flask import Flask
from flask_cors import CORS

from routes.email_routes import email_bp
from routes.send_email import send_bp


app = Flask(__name__)

# ✅ Enable CORS for all routes (important for React frontend)
CORS(app, resources={r"/*": {"origins": "*"}})

# ✅ Register blueprint
app.register_blueprint(email_bp)
app.register_blueprint(send_bp)

# ✅ Test route
@app.route("/")
def home():
    return {"message": "AI Email Assistant Backend Running"}

# ✅ Debug: show all registered routes (VERY helpful)
print("\nRegistered Routes:")
print(app.url_map)
print("\n")

if __name__ == "__main__":
    app.run(debug=True)
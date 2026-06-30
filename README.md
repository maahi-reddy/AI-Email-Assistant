# 📧 AI Email Assistant

An AI-powered Email Assistant built using **Flask**, **React**, **Google Gemini AI**, and **Brevo API**. The application helps users generate professional emails, customize them with different tones and lengths, and send them directly from the application.

---

## ✨ Features

* 🤖 AI-powered email generation using Google Gemini
* 📝 Generate complete emails from simple prompts
* 📌 Automatic or custom subject generation
* 🎭 Multiple writing tones

  * Professional
  * Friendly
  * Formal
  * Casual
* 📏 Adjustable email length

  * Short
  * Medium
  * Long
* 📧 Send generated emails directly using Brevo API
* 📋 Copy generated email to clipboard
* 📄 Download generated email as PDF
* 🎨 Modern React-based user interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Flask
* Python

### AI Model

* Google Gemini 2.5 Flash API

### Email Service

* Brevo API

### Other Libraries

* jsPDF
* python-dotenv

---

## 📂 Project Structure

```
AI-Email-Assistant/
│
├── backend/
│   ├── app.py
│   ├── routes/
│   ├── services/
│   ├── prompts/
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/AI-Email-Assistant.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file and add:

```
GEMINI_API_KEY=your_gemini_api_key

BREVO_API_KEY=your_brevo_api_key

SENDER_EMAIL=your_verified_sender_email
```

Run the backend:

```bash
python app.py
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

---

## 💡 How It Works

1. User enters an email prompt.
2. User selects task, tone, and email length.
3. Gemini AI generates a subject and email body.
4. The generated email is displayed in the application.
5. Users can:

   * Copy the email
   * Download it as a PDF
   * Send it directly through Brevo

---

## 🌐 Live Demo

**Frontend:** https://ai-email-assistant-nine.vercel.app

**Backend API:** https://ai-email-assistant-te5d.onrender.com

---

## ⚠️ Live Demo Notice

The application is fully deployed and the AI-powered email generation feature works as expected.

The **Send Email** functionality is powered by the **Brevo API**. Since this project uses a free Brevo account, email sending requires the deployment server's IP address to be authorized in the Brevo dashboard. As Render may use different outbound IP addresses, the **Send Email** feature may not work in the public live demo.

This is a deployment limitation of the free Brevo plan and **not an issue with the application's implementation**.

To experience the complete functionality, clone the repository, configure your own API keys, authorize your server's IP address in Brevo, and run the project locally.

## 📸 Screenshots

### Home Page

![Home Page](screenshots/Screenshot(107).png)
### Generated Email

![Generated Email](screenshots/Screenshot(108).png)

### Copy Email

![Send Email](screenshots/Screenshot(109).png)

### Download PDF

![Download PDF](screenshots/Screenshot(110).png)

### Send Email

![Send Email](screenshots/Screenshot(111).png)

### Received Email

![Received Email](screenshots/Screenshot(112).png)





---

## 🔮 Future Enhancements

* Email templates
* Grammar checking
* Multiple language support
* Voice input
* Email scheduling
* Email history
* User authentication
* Rich text editor

---

## 👩‍💻 Author

**Mahika Dachireddy**

Computer Science Student | AI & Full-Stack Development Enthusiast

---

⭐ If you like this project, consider giving it a star on GitHub!

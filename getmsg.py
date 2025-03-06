from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib

app = Flask(__name__)
CORS(app)  # Allow frontend calls

# Replace with your email credentials
SENDER_EMAIL = "your_email@gmail.com"
SENDER_PASSWORD = "your_app_password"
RECEIVER_EMAIL = "your_email@gmail.com"

@app.route('/send-message', methods=['POST'])
def send_message():
    try:
        data = request.json
        name, email, message = data["name"], data["email"], data["message"]

        subject = f"New Message from {name}"
        body = f"From: {name} ({email})\n\n{message}"

        # Sending Email
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, f"Subject: {subject}\n\n{body}")

        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as e:
        return jsonify({"message": "Error sending message!", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

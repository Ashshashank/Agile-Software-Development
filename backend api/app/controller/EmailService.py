from email.message import EmailMessage
import smtplib, ssl
from app.config.Config import settings

class EmailService:
    @staticmethod
    def sendEmail(name, phone, email, message):
        full_message = f'Hi {name}, \n\n Thank you for the message.\n\nMessage received\n{name} with phone number {phone} send message:\n{message}'

        msg = EmailMessage()
        msg.set_content(full_message)
        msg["Subject"] = f'Easy E-Learning Message Recieved'
        msg["From"] = settings.email
        msg["To"] = email
        context = ssl.create_default_context()

        with smtplib.SMTP_SSL("smtp.gmail.com", port=465, context=context) as smtp:
            smtp.login(settings.email, settings.email_password)
            smtp.send_message(msg)

        return 'email sent'

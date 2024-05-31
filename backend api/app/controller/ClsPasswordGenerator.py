import hashlib


class PasswordGenerator:
    def __init__(self, email: str, password: str):
        self.email = email
        self.password = password

    @property
    def encoded_password(self):
        encoded = self.password.encode()
        encoded_pw = hashlib.sha256(encoded)
        return encoded_pw.digest()









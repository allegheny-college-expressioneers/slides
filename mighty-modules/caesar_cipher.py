def encrypt(text, shift):
    encrypted = ''
    for character in text:
        encrypted += chr(ord(character) + shift)
    return encrypted

def decrypt(text, shift):
    return encrypt(text, -shift)

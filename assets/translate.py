import os
import re
from googletrans import Translator

def translate_text(text, src='zh-cn', dest='en'):
    translator = Translator()
    try:
        translation = translator.translate(text, src=src, dest=dest)
        return translation.text.title()  # Capitalize the first letter of each word
    except Exception as e:
        print(f"Error translating {text}: {e}")
        return text

def process_unicode(match):
    return match.group(0).encode().decode('unicode_escape')

def translate_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Convert Unicode escape sequences to Chinese characters
    content = re.sub(r'\\u[\da-fA-F]{4}', process_unicode, content)

    # Regex to find Chinese characters
    pattern = re.compile(r'[\u4e00-\u9fff]+')

    translations = {}
    matches = pattern.findall(content)

    for match in matches:
        if match not in translations:
            translations[match] = translate_text(match)

    for chinese_text, english_text in translations.items():
        content = content.replace(chinese_text, english_text)

    # Save the translated content back to the original file
    with open(file_path, 'w', encoding='utf-8', errors='backslashreplace') as file:
        file.write(content)

    print(f'Translated file saved as {file_path}')

def translate_folder(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.js'):
                file_path = os.path.join(root, file)
                print(f'Translating file {file_path}')
                translate_file(file_path)

if __name__ == '__main__':
    folder_path = os.path.dirname(os.path.abspath(__file__))
    translate_folder(folder_path)

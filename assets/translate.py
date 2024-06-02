import re
import sys
from googletrans import Translator

def translate_text(text, src='zh-cn', dest='en'):
    translator = Translator()
    translation = translator.translate(text, src=src, dest=dest)
    return translation.text

def main(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Regex to find Chinese characters
    pattern = re.compile(r'[\u4e00-\u9fff]+')

    translations = {}
    matches = pattern.findall(content)

    for match in matches:
        if match not in translations:
            translations[match] = translate_text(match)

    for chinese_text, english_text in translations.items():
        content = content.replace(chinese_text, english_text)

    output_file_path = file_path.replace('.js', '_translated.js')
    with open(output_file_path, 'w', encoding='utf-8') as file:
        file.write(content)

    print(f'Translated file saved as {output_file_path}')

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python translate_tool.py <path_to_js_file>")
        sys.exit(1)

    file_path = sys.argv[1]
    main(file_path)

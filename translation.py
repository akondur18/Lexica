import json
from google.cloud import translate_v2 as translate
import os

# Set up your Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.join(os.path.dirname(__file__), "service_account.json")

def translate_json_list(data_list, target_language):
    """
    Translates a list of text strings and returns a new list of translated strings.

    Args:
        data_list (list): A list of strings to be translated.
        target_language (str): The target language code.

    Returns:
        list: A list of translated strings.
    """

    client = translate.Client()
    translated_list = []

    for text in data_list:
        translation = client.translate(text, target_language=target_language)
        translated_list.append(translation['translatedText'])

    return translated_list

if __name__ == "__main__":
    try:
        # Load JSON from a file
        with open(os.path.join(os.path.dirname(__file__), "transcription_output.json"), "r") as f:
            data_list = json.load(f)
    except FileNotFoundError:
        # Create a sample JSON list for testing
        data_list = [
            "I'm taking care of you today",
            " tell me more about listen to you in today how long have you been experiencing any changes",
            " when did you first start using these issues",
            " do you have any chronic condition that I should be aware of diabetes or high blood pressure",
            " what message",
            " how's your sleep lately been getting enough rest",
            " smoke or drink alcohol",
            " I'm pretty concerned about what's going on with you",
            " how to make sure."
        ]

    target_language = "es"  # Change this to your desired language code

    try:
        translated_list = translate_json_list(data_list, target_language)

        # Save the translated list to a JSON file
        with open('translated_output.json', 'w', encoding='utf-8') as f:
            json.dump(translated_list, f, ensure_ascii=False, indent=4)

        print("Translated text saved to translated_output.json")

    except Exception as e:
        print("Error:", str(e))
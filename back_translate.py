import json
from google.cloud import translate_v2 as translate
import os

# Set up your Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/Anushka/Lexica/Lexica/.venv/service_account.json"

def post_edit(text):
  """
  Applies simple post-editing rules to the input text.

  Args:
    text: The input text to be post-edited.

  Returns:
    The post-edited text.
  """

  # Remove extra spaces
  text = text.strip()

  # Correct common translation errors (adjust as needed)
  text = text.replace("double space", "single space")
  text = text.replace("incorrect word", "correct word")

  return text

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
        with open("//Users/Anushka/Lexica/Lexica/.venv/translated_output.json", "r") as f:
            data_list = json.load(f)
    except FileNotFoundError:
        # Create a sample JSON list for testing
        data_list = [
            "Estoy cuidando de ti hoy",
            " Cuéntame más sobre lo que te escuché hoy. ¿Cuánto tiempo llevas experimentando algún cambio?",
            " ¿Cuándo empezaste a utilizar estos problemas?",
            " ¿Tiene alguna condición crónica que deba tener en cuenta, como diabetes o presión arterial alta?",
            " ¿Qué mensaje?",
            " ¿Cómo ha ido tu sueño últimamente? ¿Has descansado lo suficiente?",
            " fumar o beber alcohol",
            " Estoy bastante preocupado por lo que te está pasando.",
            " Cómo asegurarse."
        ]

    target_language = "en"  # Change this to your desired language code

    try:
        translated_list = translate_json_list(data_list, target_language)

        # Post-edit the translations (manually or automatically)
        for i, text in enumerate(translated_list):
            # Add your post-editing logic here, e.g., using a rule-based system or a language model
            translated_list[i] = post_edit(text)

        # Save the post-edited translations to a JSON file
        with open('back_translated_output.json', 'w', encoding='utf-8') as f:
            json.dump(translated_list, f, ensure_ascii=False, indent=4)

        print("Translated text saved to back_translated_output.json")

    except Exception as e:
        print("Error:", str(e))



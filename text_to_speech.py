import json
from google.cloud import texttospeech
import os

# Set up your Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/Anushka/Lexica/Lexica/.venv/service_account.json"

def text_to_speech(text, output_filename):
    """
    Converts the given text to speech and saves it as an MP3 audio file.

    Args:
        text (str): The text to be converted to speech.
        output_filename (str): The filename for the output audio file.
    """

    client = texttospeech.TextToSpeechClient()

    # Set the text input for the synthesis
    input_text = texttospeech.SynthesisInput(text=text)

    # Note: the voice can be customized according to the desired language and gender
    voice = texttospeech.VoiceSelectionParams(
        language_code="es-ES",  # Spanish
        ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )

    # Select the audio encoding
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    # Perform the text-to-speech request
    response = client.synthesize_speech(
        input=input_text, voice=voice, audio_config=audio_config
    )

    # Write the response to the output file
    with open(output_filename, "wb") as out:
        out.write(response.audio_content)
    print(f"Audio content written to {output_filename}")

if __name__ == "__main__":
    # Load the transcript from the JSON file
    with open("/Users/Anushka/Lexica/Lexica/.venv/translated_output.json", "r") as f:
        data = json.load(f)

    # Iterate over each transcript and generate an audio file
    for index, transcript in enumerate(data):
        output_filename = f"output_{index}.mp3"
        text_to_speech(transcript, output_filename)
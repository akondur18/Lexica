from google.cloud import speech
import os
import json  # Import the json module

# Set the path to your service account key file
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/Anushka/Lexica/Lexica/.venv/service_account.json"

def transcribe_speech_gcs(gcs_uri):
    """Transcribes long audio file using Google Cloud Speech-to-Text API with LongRunningRecognize."""
    
    # Initialize Google Speech-to-Text client
    client = speech.SpeechClient()

    # Configure the request
    audio = speech.RecognitionAudio(uri=gcs_uri)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,# Change based on your audio format
        sample_rate_hertz=16000,# Change this based on the audio sample rate
        language_code="en-US"# Change to desired language
    )

    # Make the long-running API call
    try:
        operation = client.long_running_recognize(config=config, audio=audio)
        print("Waiting for operation to complete...")
        response = operation.result(timeout=300)

        # Collect transcribed text in a list
        transcripts = []
        for result in response.results:
            transcripts.append(result.alternatives[0].transcript)

        # Save transcripts to a JSON file
        output_file_path = "transcription_output.json"
        with open(output_file_path, "w") as json_file:
            json.dump(transcripts, json_file, indent=4)  # Use indent for pretty printing

        print(f"Transcription saved to {output_file_path}")

    except Exception as e:
        print(f"Error occurred during transcription: {e}")

if __name__ == "__main__":
    # Provide the URI to your audio file in Google Cloud Storage
    gcs_uri = "gs://lexica_bucket/dan_voice_sample.wav"
    
    # Call the transcription function
    transcribe_speech_gcs(gcs_uri)
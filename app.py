
# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from backend import speech_to_text
from backend import translation
from backend import text_to_speech
from backend import back_translate
from backend import audio

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Speech-to-Text Endpoint
@app.route('/speech-to-text', methods=['POST'])
def speech_to_text_route():
    audio_file = request.files['audio']
    transcript = speech_to_text.convert_audio_to_text(audio_file)
    return jsonify({'transcript': transcript})

# Text Processing / Translation Endpoint
@app.route('/process-text', methods=['POST'])
def process_text_route():
    text = request.json.get('text')
    processed_text = translation.process_text(text)
    return jsonify({'processed_text': processed_text})

# Text-to-Speech Endpoint
@app.route('/text-to-speech', methods=['POST'])
def text_to_speech_route():
    text = request.json.get('text')
    audio_content = text_to_speech.convert_text_to_audio(text)
    return jsonify({'audio_content': audio_content})

# Back-Translate Endpoint
@app.route('/back-translate', methods=['POST'])
def back_translate_route():
    text = request.json.get('text')
    back_translated_text = back_translate.perform_back_translation(text)
    return jsonify({'back_translated_text': back_translated_text})

# Audio Processing Endpoint (for any additional audio processing)
@app.route('/audio-process', methods=['POST'])
def audio_process_route():
    audio_data = request.files['audio']
    processed_audio = audio.process_audio(audio_data)
    return jsonify({'processed_audio': processed_audio})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

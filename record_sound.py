import sounddevice as sd
import numpy as np
import keyboard
import wave
from google.cloud import speech
import os
import json 

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.join(os.path.dirname(__file__), "service_account.json")

# Parameters
sample_rate = 44100  # Sample rate for recording
channels = 2         # Number of audio channels
duration = 5        # Maximum recording duration in seconds (optional)

# Record function
def record_sound(filename):
    print("Recording started. Press 'r' again to stop.")
    recording = []
    is_recording = True

    # Function to stop recording
    def stop_recording(e):
        nonlocal is_recording
        is_recording = False
        print("Recording stopped.")

    # Start listening for the stop key
    keyboard.on_press_key('r', stop_recording)

    # Record audio
    with sd.InputStream(samplerate=sample_rate, channels=channels) as stream:
        while is_recording:
            data = stream.read(1024)[0]
            recording.append(data)

    # Convert the recording to a numpy array and save to WAV file
    audio_data = np.concatenate(recording, axis=0)
    audio_data = audio_data * (2**15 - 1)  # Scale to int16
    audio_data = audio_data.astype(np.int16)

    # Save to WAV file
    with wave.open(filename, 'wb') as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(2)  # 2 bytes for int16
        wf.setframerate(sample_rate)
        wf.writeframes(audio_data.tobytes())

# Main logic
if __name__ == "__main__":
    filename = "recording.wav"
    print("Press 'r' to start recording...")
    keyboard.wait('r')  # Wait for 'r' to start recording
    record_sound(filename)
    print(f"Recording saved as {filename}")

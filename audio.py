import sounddevice as sd
import soundfile as sf
import os


# List to hold the names of the MP3 files
mp3_files = []


# Get the directory of the current file
current_file_directory = os.path.dirname(os.path.abspath(__file__))


# List to hold the names of the MP3 files
mp3_files = []

# Iterate through the files in the parent directory
for filename in os.listdir(current_file_directory):
    # Check if the file ends with .mp3
    if filename.endswith(".mp3"):
        mp3_files.append(filename)  # Add the file name to the list


# Play each MP3 file
for file in mp3_files:
    data, fs = sf.read(file, dtype='float32')
    sd.play(data, fs)
    sd.wait()
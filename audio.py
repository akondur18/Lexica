import sounddevice as sd
import soundfile as sf
import numpy as np

# List of MP3 files to play
mp3_files = ["/Users/Anushka/Lexica/output_0.mp3", "/Users/Anushka/Lexica/output_1.mp3", "/Users/Anushka/Lexica/output_2.mp3", "/Users/Anushka/Lexica/output_3.mp3", "/Users/Anushka/Lexica/output_4.mp3", "/Users/Anushka/Lexica/output_5.mp3", "/Users/Anushka/Lexica/output_6.mp3", "/Users/Anushka/Lexica/output_7.mp3", "/Users/Anushka/Lexica/output_8.mp3"]

for file in mp3_files:
    data, fs = sf.read(file, dtype='float32')
    sd.play(data, fs)
    sd.wait()
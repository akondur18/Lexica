Lexica

Team Members: Dan Fu, Oliver Gu, Andy Zhang, Smriti Mumudi, Sachi Kurian, Ananya Yadav, Chloe Wolohan, Sriya Uttharkar, Farah Nisar, Noreen Ahmed, Anushka Kondur, Ciera Simon

Problem Statement: 1/5 Americans speak a predominant language at home that is not English, yet 1/3 hospitals lack suffieicnt translation services. This is measured by availability of these services, cost (monetary and time), and accuracy of translation.

Description: Lexica is an application designed to facilitate communication and language barriers between medical practicioners and their patients. Two people can easily navigate it using its dual-screen translating page, where both members of the conversation received their respective visual translations in real time. A unique feature of Lexica is voice cloning, which allows the physician to be heard in their own voice. Additionally, circular translation allows the physician to be confident that they are being interpreted correctly to their patient. Last but not least, this application is HIPAA Compliant, as it is designed with patient safety in mind: end-to-end encryption and zero PHI storage.

Mechanism: On-click of the button, the program interprets the live speech and converts it into a .wav file once speech stops. That .wav file gets parsed and converted to text of the same language in which it was spoken. It is stored in a JSON file and sent to text-to-text translation. The result is then back-translated and then converted back into the audio of the specified language whilgie being displayed on the screen.

Tech Stack: 
- Figma
- React.js
- Flask
- Google APIs
- AWS: AWS Amplify, AWS Cloud Service

How to Run: 
First, ensure that all the dependencies are downloaded on your local machine. These include: 

Download Flask https://flask.palletsprojects.com/en/stable/installation/#install-flask

Download Nodejs https://nodejs.org/en

Download Router

Install all these packages python -m pip install google-cloud-speech python -m pip install google-cloud-translate python -m pip install google-cloud-texttospeech python -m pip install google-cloud-storage python -m pip install numpy python -m pip install os-sys python -m pip install pypi-json python -m pip install Flask python -m pip install soundfile python -m pip install sounddevice python -m pip install requests python -m pip install keyboard python -m pip install glob python -m pip install flask flask-cors

Once all the dependencies are added, nagivate to the file directory where you can find the files App.js and app.py. Then, open your terminal and run the folloing commands:
- npm start
- python app.py

Now our app should be running! Happy translating from the Lexica team!



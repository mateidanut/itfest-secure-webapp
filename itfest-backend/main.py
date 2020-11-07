from flask import Flask, request, jsonify
from base64 import b64decode

app = Flask(__name__)

#@app.route('/check', methods=['POST']) 
#def foo():
#    data = request.json
#    print(b64decode(data))
#    return jsonify(1)

@app.route('/check', methods = ['GET', 'POST'])
def check():
   if request.method == 'POST':
      print("Recieved Audio File")
      file = request.files['file']
      print('File from the POST request is: {}'.format(file))
      with open("audio.wav", "wb") as aud:
            aud_stream = file.read()
            aud.write(aud_stream)
      return "Success"
   return 'Call from get'

@app.route('/register/<rid>', methods = ['GET', 'POST'])
def register(rid):
   if request.method == 'POST':
      print("Recieved Audio File")
      file = request.files['file']
      print('File from the POST request is: {}'.format(file))
      with open(f"audio{rid}.wav", "wb") as aud:
            aud_stream = file.read()
            aud.write(aud_stream)
      return "Success"
   return 'Call from get'

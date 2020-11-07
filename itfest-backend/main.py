import numpy as np
from flask import Flask, request, jsonify
from base64 import b64decode
from voice_similarity import *

app = Flask(__name__)

# @app.route('/check', methods=['POST'])
# def foo():
#    data = request.json
#    print(b64decode(data))
#    return jsonify(1)

EMPIRICAL_THRESHOLD = .75


@app.route('/check', methods=['GET', 'POST'])
def check():
    if request.method == 'POST':
        print("Recieved Audio File")
        file = request.files['file']
        print('File from the POST request is: {}'.format(file))
        with open("check.wav", "wb") as aud:
            aud_stream = file.read()
            aud.write(aud_stream)

        reff_profile = np.load('embed_profile.npy')
        res = compute_similarity(reff_profile, 'check.wav')

        return jsonify(int(res > EMPIRICAL_THRESHOLD))
    return 'Call from get'


@app.route('/register/<rid>', methods=['GET', 'POST'])
def register(rid):
    if request.method == 'POST':
        print("Recieved Audio File")
        file = request.files['file']
        print('File from the POST request is: {}'.format(file))
        with open(f"audio{rid}.wav", "wb") as aud:
            aud_stream = file.read()
            aud.write(aud_stream)

        if int(rid) == 0:
            print('CREATING EMBED FILE')
            embed_profile = create_profile(
                ['audio0.wav', 'audio1.wav', 'audio2.wav'])
            np.save('embed_profile.npy', embed_profile)

        return "Success"
    return 'Call from get'

import React from 'react'
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import axios from 'axios';


class VoiceLogin extends React.Component {
        state = {
            audioDetails: {
                url: null,
                blob: null,
                chunks: null,
                duration: {
                h: 0,
                m: 0,
                s: 0
                }
            },
            denied: 0
        }
        handleAudioStop(data){
            console.log(data)
            this.setState({ audioDetails: data });
        }


        uploadAudio(audioBlob) {
            let data = new FormData();
            data.append('file', audioBlob);
            return axios
                .post(`check`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(res => {
                    console.log(res)
                    if (res.data == 1) {
                        localStorage.setItem('token', 1);
                        localStorage.setItem('voice_token', 1);
                        this.props.history.replace('/');
                    } else {
                        this.setState({ denied: 1 });
                    }
                    return res
                });
        }

        handleAudioUpload(file) {
            console.log('bepissssss', file);
            this.uploadAudio(file)

            // const formData = new FormData()
            // formData.append("mydata", {uri: this.state.audioDetails.url, type: "audio/wav", name: "recording.png"})

            // fetch('check', {
            //     method: 'post',
            //     headers: {
            //         'Accept': 'application/json, text/plain, */*',
            //         'Content-Type': 'application/json'
            //     },
            //     body: formData
            //     }).then(res => console.log(res));

        }
        handleRest() {
            const reset = {
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: 0,
                m: 0,
                s: 0
            }
            };
            this.setState({ audioDetails: reset });
        }

    render() {
        return (
        <>
        <h1>{`Read the following sentence: "Autentificare vocala activata"`}</h1>
        <div>{this.state.denied && <h1>ACCESS DENIED!!!</h1>}</div>
        <Recorder
            record={true}
            title={"New recording"}
            audioURL={this.state.audioDetails.url}
            showUIAudio
            handleAudioStop={data => this.handleAudioStop(data)}
            handleAudioUpload={data => this.handleAudioUpload(data)}
            handleRest={() => this.handleRest()} 
        />
        </>
        )
    } 
}

export default VoiceLogin;
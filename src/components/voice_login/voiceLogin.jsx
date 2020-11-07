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
            }
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
        <Recorder
            record={true}
            title={"New recording"}
            audioURL={this.state.audioDetails.url}
            showUIAudio
            handleAudioStop={data => this.handleAudioStop(data)}
            handleAudioUpload={data => this.handleAudioUpload(data)}
            handleRest={() => this.handleRest()} 
        />
        )
    } 
}

export default VoiceLogin;
from resemblyzer import VoiceEncoder, preprocess_wav


def create_profile(wav_files):
    encoder = VoiceEncoder()

    profile_embed = encoder.embed_speaker([preprocess_wav(wav) for wav in wav_files])

    return profile_embed


def compute_similarity(profile_embed, wavfile):
    encoder = VoiceEncoder()

    wav = preprocess_wav(wavfile)
    wav_embed = encoder.embed_utterance(wav)

    return wav_embed @ profile_embed

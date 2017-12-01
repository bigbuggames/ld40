import { Howl } from 'howler'
import localForage from 'localforage'

import {
  SETUP_AUDIO_PENDING,
  SETUP_AUDIO_SUCCESS,
  SETUP_AUDIO_ERROR,
  PLAY_SOUND,
  STOP_SOUND
} from './actionTypes'

import audioSprites from 'globals/audioSprites'

const createAudioSource = (blobUrl) => {
  return new Howl({
    src: [blobUrl],
    format: ['ogg'],
    sprite: audioSprites
  })
}

export const setupAudioSources = () => {
  return (dispatch) => {
    dispatch({ type: SETUP_AUDIO_PENDING })

    return localForage.getItem('audio-sprite')
    
      .then((binary) => {  
        const blob = new Blob([binary], { type : 'audio/mp3' })
        const blobUrl = URL.createObjectURL(blob)
    
        window.audioSource = createAudioSource(blobUrl)

        dispatch({ type: SETUP_AUDIO_SUCCESS })
      })

      .catch((error) => {
        dispatch({ 
          type: SETUP_AUDIO_ERROR, 
          payload: error 
        })
      })
  }
}

export const playSound = (spriteName, volume = 1.0) => {
  return (dispatch) => {
    const soundId = window.audioSource.play(spriteName)
    window.audioSource.volume(volume, soundId)
  }
}

export const stopSound = (spriteName) => {
  return (dispatch) => {
    window.audioSource.stop()
  }
}

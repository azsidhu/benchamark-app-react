import { ADD_USER_MEDIA } from '../actions/types'
import { normalize } from 'normalizr'
import { mediaSchema } from '../config/schema'

const INITIAL_STATE = {
  instaMedia: {},
  instaMediaIds: [],
  mediaCount: 0,
  nextMedia: null
}

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_MEDIA:
      let normalizedMedia = normalize(action.payload.results, mediaSchema)
      return {
        ...state,
        instaMedia: normalizedMedia.entities.media,
        instaMediaIds: normalizedMedia.result,
        mediaCount: action.payload.count,
        nextMedia: action.payload.next
      }
    default:
      return { ...state }
  }
}

export { DataReducer }

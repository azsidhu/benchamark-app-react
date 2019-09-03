import { ADD_USER_MEDIA } from '../actions/types'

const INITIAL_STATE = {
  instaMedia: [],
  mediaCount: 0,
  nextMedia: null
}

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_MEDIA:
      return {
        ...state,
        instaMedia: action.payload.results,
        mediaCount: action.payload.count,
        nextMedia: action.payload.next
      }
    default:
      return { ...state }
  }
}

export { DataReducer }

const INITIAL_STATE = {
  instaMedia: [],
  mediaCount: 0,
  nextMedia: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MEDIA_FETCHED':
      return { ...state, instaMedia: action.payload }
    case 'ADD_MEDIA_COUNT':
      return { ...state, mediaCount: action.payload }
    case 'ADD_MEDIA_NEXT':
      return { ...state, nextMedia: action.payload }
    default:
      return state
  }
}

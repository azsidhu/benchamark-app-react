import {
  ADD_USER_MEDIA,
  DATA_LOADING,
  SET_IGCONNECT_SEARCH_TEXT,
  SET_SELECTED_MEDIA,
  ADD_MEDIA_DETAIL
} from '../actions/types'
import { normalize } from 'normalizr'
import { mediaSchema } from '../config/schema'

const INITIAL_STATE = {
  instaMedia: {},
  instaMediaIds: [],
  mediaCount: 0,
  dataLoading: false,
  igConnectSearchText: '',
  selectedMedia: null
}

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOADING:
      return { ...state, dataLoading: action.payload }
    case ADD_USER_MEDIA:
      let normalizedMedia = normalize(action.payload.results, mediaSchema)
      return {
        ...state,
        instaMedia: normalizedMedia.entities.media,
        instaMediaIds: normalizedMedia.result,
        mediaCount: action.payload.count
      }
    case SET_IGCONNECT_SEARCH_TEXT:
      return { ...state, igConnectSearchText: action.payload }
    case SET_SELECTED_MEDIA || ADD_MEDIA_DETAIL:
      return { ...state, selectedMedia: action.payload }
    default:
      return { ...state }
  }
}

export { DataReducer }

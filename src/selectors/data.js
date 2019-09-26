import { createSelector } from 'reselect'

const dataSelector = state => state.data

const mediaSelector = createSelector(
  dataSelector,
  data => data.instaMedia
)

const mediaIdsSelector = createSelector(
  dataSelector,
  data => data.instaMediaIds
)

const mediaCountSelector = createSelector(
  dataSelector,
  data => data.mediaCount
)

const dataLoadingSelector = createSelector(
  dataSelector,
  data => data.dataLoading
)

const igConnectSearchTextSelector = createSelector(
  dataSelector,
  data => data.igConnectSearchText
)

const selectedMediaSelector = createSelector(
  dataSelector,
  data => data.selectedMedia
)

export {
  selectedMediaSelector,
  igConnectSearchTextSelector,
  dataLoadingSelector,
  mediaCountSelector,
  mediaIdsSelector,
  mediaSelector
}
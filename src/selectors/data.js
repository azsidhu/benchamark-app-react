import { createSelector } from 'reselect'

export const dataSelector = state => state.data

export const mediaSelector = createSelector(
  dataSelector,
  data => data.instaMedia
)

export const mediaIdsSelector = createSelector(
  dataSelector,
  data => data.instaMediaIds
)

export const mediaCountSelector = createSelector(
  dataSelector,
  data => data.mediaCount
)

export const nextMediaSelector = createSelector(
  dataSelector,
  data => data.nextMedia
)

export const dataLoadingSelector = createSelector(
  dataSelector,
  data => data.dataLoading
)

export const igConnectSearchTextSelector = createSelector(
  dataSelector,
  data => data.igConnectSearchText
)

export const selectedMediaSelector = createSelector(
  dataSelector,
  data => data.selectedMedia
)

export const zipImagesLinkSelector = createSelector(
  dataSelector,
  data => data.zipImagesLink
)

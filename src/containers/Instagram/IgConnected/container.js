import {
  FetchNewData,
  fetchUserMedia,
  setCrawledImagesZIPlink
} from '../../../actions/DataActions'
import { connect } from 'react-redux'
import {
  tokenSelector,
  mediaSelector,
  mediaCountSelector,
  mediaIdsSelector,
  dataLoadingSelector,
  zipImagesLinkSelector
} from '../../../selectors/index'
import { IgConnected } from './index'

const mapStateToProps = state => ({
  accessToken: tokenSelector(state),
  instaMedia: mediaSelector(state),
  instaMediaIds: mediaIdsSelector(state),
  dataLoading: dataLoadingSelector(state),
  mediaCount: mediaCountSelector(state),
  zipImagesLink: zipImagesLinkSelector(state)
})

const mapDispatchToProps = {
  FetchNewData,
  fetchUserMedia,
  setCrawledImagesZIPlink
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IgConnected)

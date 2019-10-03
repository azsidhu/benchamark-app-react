import { connect } from 'react-redux'
import { IgConnect } from '.'
import {
  tokenSelector,
  mediaSelector,
  // mediaCountSelector,
  mediaIdsSelector,
  igConnectSearchTextSelector,
  dataLoadingSelector
} from '../../../selectors/index'
import {
  fetchUserMedia,
  CrawlNewUser,
  setIgConnectSearchText,
  setSelectedMedia
} from '../../../actions/DataActions'

const mapStateToProps = state => ({
  accessToken: tokenSelector(state),
  instaMedia: mediaSelector(state),
  instaMediaIds: mediaIdsSelector(state),
  // mediaCount : mediaCountSelector(state),
  dataLoading: dataLoadingSelector(state),
  igConnectSearchText: igConnectSearchTextSelector(state)
})

const mapDispatchToProps = {
  fetchUserMedia,
  CrawlNewUser,
  setIgConnectSearchText,
  setSelectedMedia
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IgConnect)

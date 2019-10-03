import { connect } from 'react-redux'
import { fetchMediaDetail } from '../../../actions/DataActions'
import { tokenSelector, selectedMediaSelector } from '../../../selectors/index'
import { PageResults } from './index'

const mapStateToProps = state => ({
  accessToken: tokenSelector(state),
  media: selectedMediaSelector(state)
})

const mapDispatchToProps = {
  fetchMediaDetail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageResults)

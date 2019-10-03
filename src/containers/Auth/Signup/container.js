import {
  registerUser,
  clearError,
  clearNewUser
} from '../../../actions/AuthActions'
import { connect } from 'react-redux'
import { newUserSelector, errorMsgSelector } from '../../../selectors/index'
import { Signup } from './index'

const mapStateToProps = state => ({
  errorMessage: errorMsgSelector(state),
  newUser: newUserSelector(state)
})

const mapDispatchToProps = {
  registerUser,
  clearError,
  clearNewUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

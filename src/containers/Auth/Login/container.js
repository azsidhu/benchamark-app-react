import { connect } from 'react-redux'
import { loginUser, clearError } from '../../../actions/AuthActions'
import { authSelector, errorMsgSelector } from '../../../selectors/index'
import { Login } from './index'

const mapStateToProps = state => ({
  errorMessage: errorMsgSelector(state),
  auth: authSelector(state)
})

const mapDispatchToProps = {
  loginUser,
  clearError
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

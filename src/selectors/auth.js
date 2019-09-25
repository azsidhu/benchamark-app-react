import { createSelector } from 'reselect'

const userSelector = state => state.user

const authSelector = createSelector(
  userSelector,
  user => user.auth
)

const tokenSelector = createSelector(
  authSelector,
  auth => auth.access
)

export { userSelector, authSelector, tokenSelector }

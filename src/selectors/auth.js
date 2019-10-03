import { createSelector } from 'reselect'

export const userSelector = state => state.user

export const authSelector = createSelector(
  userSelector,
  user => user.auth
)

export const errorMsgSelector = createSelector(
  userSelector,
  user => user.errorMessage
)
export const newUserSelector = createSelector(
  userSelector,
  user => user.newUser
)

export const tokenSelector = createSelector(
  authSelector,
  auth => (auth ? auth.access : null)
)

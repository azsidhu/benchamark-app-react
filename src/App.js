import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './configureStore'
import Routes from './routes'
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from 'react-toasts'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.BOTTOM_LEFT}
      />
    </Provider>
  )
}

export { App }

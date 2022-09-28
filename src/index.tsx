import React from 'react'
import App from './components/App'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/store'

const rootNode = document.getElementById('app')
if (rootNode) {
  createRoot(rootNode).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

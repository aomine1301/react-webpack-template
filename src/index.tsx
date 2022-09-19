import React from 'react'
import App from './components/App'
import { createRoot } from 'react-dom/client'

const rootNode = document.getElementById('app')
if (rootNode) {
  createRoot(rootNode).render(<App />)
}

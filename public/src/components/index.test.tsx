import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

test('renders App without crashing', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.createRoot(div).render(<App />)
})


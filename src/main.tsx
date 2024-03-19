import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  // <GoogleOAuthProvider clientId={googleClientId}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </GoogleOAuthProvider>,
  document.getElementById('root')
)

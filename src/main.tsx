import React from 'react'
import ReactDOM from 'react-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App'

const googleClientId: string = String(import.meta.env.GOOGLE_OAUTH_CLIENT_ID)

ReactDOM.render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
)

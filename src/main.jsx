import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <footer className='footer'>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel='noreferrer'
        > Frontend Mentor</a>
        <br />
      Coded by
      <a
        href="https://www.frontendmentor.io/profile/jordanheve"
        target="_blank"
        rel='noreferrer'
        > JordanHeVe</a>
    </footer>
  </React.StrictMode>,
)

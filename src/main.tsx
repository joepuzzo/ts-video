import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import {AppProvider} from './AppProvider'
import './prism.css'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Router basename="/ts-video">
        <div id="portal-root"></div>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
)

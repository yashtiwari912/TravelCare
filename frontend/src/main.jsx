import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import SosButton from './components/SosButton.jsx'
import { SearchContextProvider } from './context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchContextProvider>
      <AppContextProvider>
        <App />
        <SosButton />
      </AppContextProvider>
    </SearchContextProvider>
  </BrowserRouter>,
)

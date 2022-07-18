import React from 'react'
import './App.css'
import { SettingsButton } from './components/SettingsButton'
import { StylingOptions } from './components/stylingOptions/StylingOptions'
import * as config from './config.json'

const callback = () => {
  alert('Success')
}

const showSettingsButton = () => {
  if (window.location.pathname === '/') {
    return <SettingsButton />
  }
}

const showStylingOptions = () => {
  if (window.location.pathname === '/styling-options/') {
    return <StylingOptions config={ config } callback={ callback } />
  }
}

function App () {
  return (
      <div>
        {showSettingsButton()}
        {showStylingOptions()}
      </div>
  )
}

export default App

import React from 'react'

const cogwheel = require('../assets/cogwheel.png')

export const SettingsButton = () => {
  const handleButtonClick = () => {
    window.location.pathname += 'styling-options/'
  }

  return (
      <button onClick={handleButtonClick}>
        <img src={cogwheel} alt='settings'/>
      </button>
  )
}

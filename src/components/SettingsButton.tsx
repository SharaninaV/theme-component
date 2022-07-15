import React from 'react'

const cogwheel = require('../assets/cogwheel.png')

export const SettingsButton = () => {
  return (
      <button>
        <img src={cogwheel} alt='settings'/>
      </button>
  )
}

import React from 'react'
import './StylingOptions.css'
import { OptionsGroup } from '../optionsGroup/OptionsGroup'
import { IConfig } from '../../types'

interface IStylingOptionsProps {
    config: IConfig
    callback: () => void
}

export const StylingOptions = ({ config, callback }: IStylingOptionsProps) => {
  return (
      <div className='styling-options'>
          <h1 className='styling-options__title'>{config.title}</h1>
          <p className='styling-options__description'>{config.description}</p>
          {config.options.map(option => {
            return (
                  <>
                      <hr className='styling-options__divider' />
                    <OptionsGroup title={option.title} items={option.options} />
                  </>
            )
          })}
      </div>
  )
}

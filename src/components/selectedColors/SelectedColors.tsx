import React from 'react'
import './SelectedColors.css'

interface SelectedColorsProps {
    colors: string[]
}

export const SelectedColors = ({ colors }: SelectedColorsProps) => {
  const appends = ['__left-top', '__right-top', '__right-bottom', '__left-bottom']
  return (
        <div className='selected-colors'>
            {colors.map((item, index) => {
              return (
                    <div className={'selected-colors__item' + appends[index]} key={item + index} style={{ backgroundColor: colors[index] }}/>
              )
            })}
        </div>
  )
}

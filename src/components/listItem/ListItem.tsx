import React from 'react'
import { SelectedColors } from '../selectedColors/SelectedColors'
import './ListItem.css'
const right = require('../../assets/chevron-right.png')

interface ListItemProps {
    title: string,
    description: string,
    colors: string[]
}

export const ListItem = ({ title, description, colors }: ListItemProps) => {
  return (
        <div className='list-item'>
            <SelectedColors colors={colors} />
            <div className='list-item__text'>
                <h2 className='list-item__text__title'>{title}</h2>
                <p className='list-item__text__description'>{description}</p>
            </div>
            <div>
                <img src={right} alt='right'/>
            </div>
        </div>
  )
}

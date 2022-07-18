import React from 'react'
import { ListItem } from '../listItem/ListItem'
import { IOptionGroupItem } from '../../types'

interface OptionsGroupProps {
    title: string
    items: IOptionGroupItem[]
}

export const OptionsGroup = ({ title, items }: OptionsGroupProps) => {
  return (
        <div>
            <h3>{title}</h3>
            {items.map(item => (
                <ListItem
                    key={item.description}
                    title={item.title}
                    description={item.description}
                    colors={item.colors} />
            )
            )}
        </div>
  )
}

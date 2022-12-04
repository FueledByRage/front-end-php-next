import React from 'react'
import { AvatarIcon, IconBorder } from './avatar'

export default function Icon( props ) {
  return (
    <IconBorder>
        <AvatarIcon>
            { props.children }
        </AvatarIcon>
    </IconBorder>
  )
}

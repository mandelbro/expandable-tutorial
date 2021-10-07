// Icon.jsx
import React, { useContext } from 'react'
import { ExpandableContext } from './Expandable'

const Icon = ({ ...props }) => {
  const { expanded } = useContext(ExpandableContext)

  return (
    <span {...props}>
      {expanded ? '-' : '+'}
    </span>
  )
}

export default Icon

// Body.jsx
import React, { useContext } from 'react'
import { ExpandableContext } from './Expandable'

const Body = ({children, className = '', ...props}) => {
  const { expanded } = useContext(ExpandableContext)

  return expanded ? (
    <div {...props}>
      {children}
    </div>
  ) : null
}

export default Body

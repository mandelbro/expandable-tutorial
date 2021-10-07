import React, { createContext } from 'react'

import Header from './Header'
import Body from './Body'
import Icon from './Icon'

import useExpandable from './useExpandable'

export const ExpandableContext = createContext()
const { Provider } = ExpandableContext

const Expandable = ({
  children,
  onToggle,
  shouldExpand,
  ...props
}) => {
  const value = useExpandable({ onToggle, shouldExpand })

  return (
    <Provider value={value}>
      <div {...props}>
        {children}
      </div>
    </Provider>
  )
}

Expandable.Header = Header
Expandable.Body = Body
Expandable.Icon = Icon

export default Expandable

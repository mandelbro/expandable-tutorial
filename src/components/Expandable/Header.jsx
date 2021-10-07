//Header.js
import React, { useContext } from 'react'
import { ExpandableContext } from './Expandable'

const Header = ({ children, ...props }) => {
  // Check it 👀
  // swap out the togglerProps for getTogglerProps
  const { getTogglerProps } = useContext(ExpandableContext)
  return <div {...getTogglerProps()} {...props}>{children}</div>
}

export default Header

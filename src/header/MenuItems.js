import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
function MenuItems({name,link}) {
  return (
    <>
      <MenuItem>{name}</MenuItem>
      {/* <Link to={link}>
        <MenuItem>{name}</MenuItem>
      </Link> */}
    </>
  )
}

export default MenuItems

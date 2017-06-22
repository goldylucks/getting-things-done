// @flow

import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import AutoComplete from 'material-ui/AutoComplete'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Divider from 'material-ui/Divider'

const Header = () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Get Shit Done" />
    </ToolbarGroup>
    <ToolbarGroup lastChild>
      <AutoComplete
        dataSource={['buy milk', 'go to the store', 'smile']}
        hintText="Search"
      />
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Tags" />
        <MenuItem primaryText="Areas" />
        <Divider />
        <MenuItem primaryText="Profile" />
        <MenuItem primaryText="Account" />
        <MenuItem primaryText="Contact" />
        <MenuItem primaryText="About" />
        <Divider />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    </ToolbarGroup>
  </Toolbar>
)

export default Header

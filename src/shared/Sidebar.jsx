// @flow

import React from 'react'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const Sidebar = () => (
  <Paper style={{ width: 320, height: '100vh' }}>
    <List>
      <ListItem
        primaryText="Collect"
        initiallyOpen
        primaryTogglesNestedList
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Inbox"
          />,
        ]}
      />
    </List>
    <Divider />
    <List>
      <ListItem
        primaryText="Actions"
        initiallyOpen
        primaryTogglesNestedList
        nestedItems={[
          <ListItem
            key={1}
            primaryText="next"
          />,
          <ListItem
            key={2}
            primaryText="focus"
          />,
          <ListItem
            key={3}
            primaryText="scheduled"
          />,
          <ListItem
            key={4}
            primaryText="waiting"
          />,
          <ListItem
            key={5}
            primaryText="someday"
          />,
        ]}
      />
    </List>
    <Divider />
    <List>
      <ListItem
        key={1}
        primaryText="Projects"
        initiallyOpen
        primaryTogglesNestedList
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Do something cool"
          />,
          <ListItem
            key={2}
            primaryText="Do something MORE cool"
          />,
          <ListItem
            key={3}
            primaryText={<Subheader>Show inactive projects</Subheader>}
          />,
        ]}
      />
    </List>
    <Divider />
    <List>
      <ListItem
        key={1}
        primaryText="Reference"
        initiallyOpen
        primaryTogglesNestedList
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Books"
          />,
          <ListItem
            key={2}
            primaryText="Videos"
          />,
        ]}
      />
    </List>
  </Paper>
)

export default Sidebar

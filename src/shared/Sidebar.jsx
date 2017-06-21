// @flow

import React from 'react'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import FontIcon from 'material-ui/FontIcon'

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
            leftIcon={<FontIcon className="fa fa-inbox" />}
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
            leftIcon={<FontIcon className="fa fa-arrow-circle-o-right" />}
          />,
          <ListItem
            key={2}
            primaryText="focus"
            leftIcon={<FontIcon className="fa fa-star-o" />}
          />,
          <ListItem
            key={3}
            primaryText="scheduled"
            leftIcon={<FontIcon className="fa fa-calendar-o" />}
          />,
          <ListItem
            key={4}
            primaryText="waiting"
            leftIcon={<FontIcon className="fa fa-hourglass-o" />}
          />,
          <ListItem
            key={5}
            primaryText="someday"
            leftIcon={<FontIcon className="fa fa-question-circle-o" />}
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
            leftIcon={<FontIcon className="fa fa-list-ul" />}
          />,
          <ListItem
            key={2}
            primaryText="Do something MORE cool"
            leftIcon={<FontIcon className="fa fa-list-ul" />}
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
            leftIcon={<FontIcon className="fa fa-bookmark-o" />}
          />,
          <ListItem
            key={2}
            primaryText="Videos"
            leftIcon={<FontIcon className="fa fa-bookmark-o" />}
          />,
        ]}
      />
    </List>
  </Paper>
)

export default Sidebar

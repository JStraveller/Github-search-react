import React from 'react'
import Appbar from '@material-ui/core/AppBar'
import { Toolbar, Typography, makeStyles, ListItem, ListItemText, List } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    marginRight: 20
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  }
})

export const Navbar = () => {
  const classes = useStyles()
  return (
    <Appbar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap className={classes.title}>
          Github Search
        </Typography>
        <List className={classes.list}>
          <ListItem button component={NavLink} to='/' exact>
            <ListItemText primary="Home page" />
          </ListItem>
          <ListItem button component={NavLink} to='/about'>
            <ListItemText primary="Information" />
          </ListItem>
        </List>
      </Toolbar>
    </Appbar>
  )
}
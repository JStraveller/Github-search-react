import React, {useContext, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 4px',
    width: 500,
    margin: '0 auto',
  },
}));

export const Search = () => {
  const classes = useStyles();

  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show("Enter data user")
    }
  }
  return (
    <form className={classes.root} onSubmit={(event) => event.preventDefault()}>
      <Input
      placeholder="Enter nickname user..." 
      fullWidth
      color='secondary'
      value={value}
      onChange={event => setValue(event.target.value)}
      onKeyPress={onSubmit}
      />
    </form>
  )
}
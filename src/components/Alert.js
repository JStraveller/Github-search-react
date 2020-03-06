import React, {useContext} from 'react'
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { AlertContext } from '../context/alert/alertContext';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Alertt = () => {
  const classes = useStyles();

  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null
  return (
    <div className={classes.root}>
      <Alert onClose={hide} severity="error">
        {alert.text}
      </Alert>
    </div>
  )
}
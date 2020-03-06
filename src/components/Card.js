import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '65%',
    height: '140px'
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export const Cardd = ({user}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={user.avatar_url}
        title={user.login}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {user.login}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" component={Link} to={'/profile/' + user.login}>
          Open
        </Button>
      </CardActions>
    </Card>
  )
}
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export const Repos = ({repos}) => {
  const classes = useStyles();
  return (
  <React.Fragment>
    {
      repos.map(repo => (
        <Card className={classes.card} key={repo.id}>
          <CardContent className={classes.cardContent}>
            
              <Link href={repo.html_url}>
                {repo.name}
              </Link>
            
          </CardContent>
        </Card>
      ))
    }
  </React.Fragment>
  )
}
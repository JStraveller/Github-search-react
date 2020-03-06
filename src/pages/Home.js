import React from 'react'
import { Fragment } from 'react'
import { Search } from '../components/Search'
import { Cardd } from '../components/Card'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { GithubContext } from '../context/github/githubContext';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const Home = () => {
  const classes = useStyles();
  const { loading, users } = useContext(GithubContext)

  return (
    <Fragment>
      <Search />

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={3}>
          {loading
            ? <CircularProgress size={80} style={{margin: '0 auto'}}/>
            : users.map(user => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <Cardd user={user} />
              </Grid>
            )
            )
          }
        </Grid>
      </Container>

    </Fragment>
  )
}
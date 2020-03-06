import React, { useContext, useEffect, Fragment } from 'react'
import {GithubContext} from '../context/github/githubContext'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { List, ListItemText } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { Repos } from '../components/Repos';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin: '20px auto'
  },
  media: {
    height: 440
  },
});

export const Profile = ({match}) => {
  const classes = useStyles();
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line 
  }, [])
  
  if (loading) {
    return <CircularProgress size={80} style={{ margin: '0 auto' }} />
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following,
    public_repos, public_gists
  } = user
  
  return (
    <Fragment>
      <Card className={classes.root}>
          <CardMedia
            component="img"
            image={avatar_url}
            title={name}
          />
        
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
          </Typography>
            {location &&
            <Typography variant="body2" color="textSecondary" component="p">
            Location: {location}
          </Typography>}
          {
            bio && <Fragment>
              <h4>BIO</h4>
              <p>{bio}</p>
            </Fragment>
          }
          <Button variant="outlined" href={html_url}>Open profile</Button>
          <List>
            {login && 
            <ListItemText>
             <strong>Username: </strong> {login}
            </ListItemText>}
            {company &&
              <ListItemText>
                <strong>Company: </strong> {company}
              </ListItemText>}
            {blog &&
              <ListItemText>
                <strong>Website: </strong> {blog}
              </ListItemText>}
          </List>
          <Chip
            label={`Followers: ${followers}`}
            color="primary"
          />
          <Chip
            label={`Following: ${following}`}
            color='secondary'
          />
          <Chip
            label={`Repos: ${public_repos}`}
            style={{ backgroundColor: '#9c27b0', color: '#fff'}}
          />
          <Chip
            label={`Gists: ${public_gists}`}
            style={{ backgroundColor: '#009688', color: '#fff' }}
          />
          </CardContent>
      </Card>
      <Repos repos={repos}/>
    </Fragment>
  )
}
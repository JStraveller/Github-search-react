import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export const About = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '300px', marginTop: '30px', padding: '20px' }}
         variant="h1">
          About page
          <Typography variant="h5">Version 1.0.0</Typography>
        </Typography>
      </Container>
    </React.Fragment>
  )
}
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <div>      
          <footer>
            <Container className={classes.container}>
              <Copyright />
            </Container>
          </footer>
        </div>
      );
}

function Copyright() {
    const classes = useStyles();
    return (
      <Typography className={classes.content} variant="body2">
        {'Copyright © Daniel Fernández Feito '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    link: {
      color: '#fff'
    },
    
    content: {
      color: '#fff',
      marginTop: '1em'
    },
    
    container: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      maxWidth: '100%',
      background: '#3f51b5',
      height: '3em',
      textAlign: 'center'
    }
}));

export default Footer;
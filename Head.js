import React from 'react'
import { Typography,  CssBaseline, Toolbar, AppBar} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from '../styles';
const Head = () => {
    const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant='h5'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Head
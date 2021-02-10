import React from 'react';
import {
  makeStyles,
  Box,
  Hidden,
} from '@material-ui/core';



import AppBarYouTube from './appBarYoutube';
import DrawerYoutube from './drawerYoutube';
import FeedYoutube from './feedYoutube';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
}));



function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarYouTube darkMode={darkMode} setDarkMode={setDarkMode} />

      <Box display='flex'>
        <Hidden mdDown>
          <DrawerYoutube/>
        </Hidden>
        <FeedYoutube/>
      </Box>
    </div>
  );
}

export default Home;
import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Switch, Toolbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: theme.palette.background.dark,
    },
    logo: {
       height: 25,
    },
    appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1,
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    icons: {
       paddingRight: theme.spacing(5),
    },
    grow: {
       flexGrow: 1,
    },
}));

function AppBarYouTube({ darkMode, setDarkMode }){
    const classes = useStyles();
    const theme = useTheme();

    return(
        <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuIcon}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark'
                ? '/images/branco.png'
                : '/images/preto.png'
            }
            alt='logo'
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant='outlined'
            color='secondary'
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    );
}


export default AppBarYouTube;
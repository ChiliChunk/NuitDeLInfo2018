import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MaterielIcon from '@material-ui/icons/CameraAlt';
import MapIcon from '@material-ui/icons/Map';
import AlertIcon from '@material-ui/icons/Error';
import EnvironnementIcon from '@material-ui/icons/LocalFlorist';
import AboutIcon from '@material-ui/icons/MoreHoriz';
import MeteoIcon from '@material-ui/icons/WbSunny';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PositionIcon from '@material-ui/icons/PersonPinCircle';


import MailIcon from '@material-ui/icons/Mail';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import Materiel from './components/Materiel'
import Maps from './components/Maps'
import Alerte from './components/Alerte'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    indexChoosen : -1
  }


  //['Environnement', 'Alerte', 'Materiel', 'Meteo' , 'Itineraires']
  renderPage(){
    switch(this.state.indexChoosen){
      case -1 :
        return(
          <Maps/>
        )
      case 0 :
        return(
          <h1>Environnement</h1>
        )
      case 1 :
        return(
          <Alerte/>
        )
      case 2 :
        return(
          <Materiel/>
        )
      case 3 :
        return(
          <h1>Meteo</h1>
        )
      case 4 :
        return(
          <h1>Itineraires</h1>
        )
    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  async choicePage(index){
    if (index === 5){
      await this.setState({indexChoosen : -1})
    }
    await this.setState({indexChoosen : index})
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <Provider store={configureStore()}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Kocpit Survive Overlay
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Environnement', 'Alerte', 'Materiel', 'Meteo' , 'Itineraires' , 'Position'].map((text, index) => (
              <ListItem button key={text} onClick={() => this.choicePage(index)}>
                <ListItemIcon>{index === 0 ? <EnvironnementIcon /> :
                              index === 1 ? <AlertIcon /> :
                              index === 2 ? <MaterielIcon/>:
                              index === 3 ? <MeteoIcon/>:
                              index === 4 ? <MapIcon/>: <PositionIcon/>
                              }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <ListItem button key="A propos">
            <ListItemIcon><AboutIcon/></ListItemIcon>
            <ListItemText primary="A propos"/>
          </ListItem>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.renderPage()}
        </main>
      </div>
      </Provider>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Avatar,
  Drawer,
  List,
  ListItemText,
  Divider,
  ListItem,
  ListItemAvatar,
} from '@material-ui/core';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SearchIcon from '@material-ui/icons/Search';
import avatarImage from '../../assets/van-damme.jpg';
import logoImage from '../../assets/logo.png';
import { fetchLogOutAC } from '../../redux/action-creator';
import UploadVideoBtn from '../../components/UploadVideoBtn/UploadVideoBtn';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    color: '#6D676E',
    backgroundColor: '#FBFFFE',
  },
  logoDiv: {
    textAligh: 'center',
    minWidth: '120px',
    minHeight: '50px',
    position: 'relative',
  },
  logo: {
    maxWidth: '200px',
    maxHeight: '100px',
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    marginRight: theme.spacing(2),
    border: '1px solid #e0e0e0',
    marginLeft: 0,
    [theme.breakpoints.down(725)]: {
      display: 'none',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  listItem: {
    color: '#6D676E',
    '&:hover': {
      backgroundColor: '#96031A',
      color: '#FAA916',
    },
  },
  listTitle: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    fontWeight: 'bold',
    color: '#FAA916',
    backgroundColor: '#96031A',
  },
  profileLink: {
    textDecoration: 'none',
  },
}));

const PrimarySearchAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleLogout = () => {
    props.fetchLogout();
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link className={classes.profileLink} to="/profile">
          My Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose, handleLogout}>Log Out</MenuItem>
    </Menu>
  );

  const renderDrawer = (
    <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
      <div onClick={handleDrawerClose}>
        <Typography className={classes.listTitle} variant="h6">
          Following
        </Typography>
        <Divider />
        <List>
          <ListItem button className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={avatarImage} />
            </ListItemAvatar>
            <ListItemText primary="Ranko" />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={avatarImage} />
            </ListItemAvatar>
            <ListItemText primary="Ilya" />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={avatarImage} />
            </ListItemAvatar>
            <ListItemText primary="Kostya" />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={avatarImage} />
            </ListItemAvatar>
            <ListItemText primary="Kolya" />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={avatarImage} />
            </ListItemAvatar>
            <ListItemText primary="Katrin" />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src="" />
            </ListItemAvatar>
            <ListItemText primary="Anon" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <SubscriptionsIcon />
          </IconButton>
          {renderDrawer}

          <div className={classes.logoDiv}>
            <Link to="/main">
              <img className={classes.logo} src={logoImage} alt="logo" />
            </Link>
          </div>

          <UploadVideoBtn
            btnName={"Upload challenge"}
            formTitle={"Upload Challenge"}
            formDescription={"To upload your Challenge, please enter its title, description and attach video file. Thank You!"}
          />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={props.handleChange}
              type="search"
              placeholder="Search..."
              classes={{ input: classes.inputInput }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar alt="Challenger" src={props.state.user.avatar} />
          </IconButton>
          {renderMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  fetchLogout: () => dispatch(fetchLogOutAC())
});

export default connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar);

import React from 'react';
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
  Button,
  Drawer,
  List,
  ListItemText,
  Divider,
  ListItem,
  ListItemAvatar
} from '@material-ui/core';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import avatarImage from '../../assets/van-damme.jpg';
import logoImage from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    color: '#6D676E',
    backgroundColor: '#FBFFFE',
  },
  menuButton: {
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
    transform: 'translate(-50%, -50%)'
  },
  divUpload: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
  },
  inputUpload: {
    display: 'none',
  },
  btnUpload: {
    backgroundColor: '#FAA916',
    color: '#FBFFFE',
    '&:hover': {
      backgroundColor: '#96031A',
      color: '#FAA916',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    marginRight: theme.spacing(2),
    border: '1px solid #6D676E',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
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
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  listItem: {
    color: '#6D676E',
    '&:hover': {
      backgroundColor: '#96031A',
      color: '#FAA916',
    }
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
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const list = (
    <div onClick={handleDrawerClose}>
      <Typography className={classes.listTitle} variant="h6">Following</Typography>
      <Divider />
      <List>
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={avatarImage} />
          </ListItemAvatar>
          <ListItemText primary="Ranko" />
        </ListItem >
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={avatarImage} />
          </ListItemAvatar>
          <ListItemText primary="Zaremba" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={avatarImage} />
          </ListItemAvatar>
          <ListItemText primary="KoStYa" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={avatarImage} />
          </ListItemAvatar>
          <ListItemText primary="McKo" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={avatarImage} />
          </ListItemAvatar>
          <ListItemText primary="KatrinЪ" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src="" />
          </ListItemAvatar>
          <ListItemText primary="Anon" />
        </ListItem>
      </List>
    </div>
  );

  // const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      // id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} >
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

          <div className={classes.logoDiv}>
            <img className={classes.logo} src={logoImage} alt="logo" />
          </div>

          <div className={classes.divUpload}>
            <input
              accept="image/*"
              className={classes.inputUpload}
              id="contained-button-file"
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                startIcon={<CloudUploadIcon />}
                className={classes.btnUpload}
              >
                <Typography>Upload Challenge</Typography>
              </Button>
            </label>
          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <IconButton
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar alt="Challenger" src={avatarImage} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        {list}
      </Drawer>
    </div>
  );
}

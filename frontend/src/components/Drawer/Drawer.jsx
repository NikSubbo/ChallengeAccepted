import React, { useState, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Typography,
  Avatar,
  Drawer,
  List,
  ListItemText,
  Divider,
  ListItem,
  ListItemAvatar,
} from '@material-ui/core';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import avatarImage from '../../assets/van-damme.jpg';

const useStyles = makeStyles((theme) => ({
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
}));

const FollowingDrawer = (props) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

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
    <Fragment>
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
    </Fragment>
  )
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(FollowingDrawer);

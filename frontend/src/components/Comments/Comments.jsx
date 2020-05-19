import React from 'react';
import { TextField, List, ListItem, ListItemText, ListItemAvatar, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Comments() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ali Connors" src="" />
        </ListItemAvatar>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Add Comment" />
        </form>
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ali Connors" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                — I'll be in your neighborhood doing errands this…
        </Typography>
              {" 11/05/2020 "}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Scott Summer" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Scott Summer"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                — I'll be in your neighborhood doing errands this… Hurra!
        </Typography>
              {" 12/05/2020 "}
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Cindy Baker"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                — I'll be in your neighborhood doing errands this… Hurra! Hurra!
        </Typography>
              {' 14/05/2020 '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  )
}

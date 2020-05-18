import React from 'react';
import { Box, CardMedia, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
    position: 'relative',
  },
  card: {

    maxWidth: 345,
    overflow: "visible"
  },
  media: {
    height: 'auto',
    padding: '100%',
    margin: '20px'
  },
  box: {
    width: '45%',
    mx: "auto"
  }
}))

export default function AnswerCard() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h3" align="center">Answers</Typography>

      <Box className={classes.box}>
        <CardMedia
          className={classes.media}
          image={require("../../assets/BottleCapChallenge.gif")}
          title="Paella dish"
        />
      </Box>
      <Divider />
      <Box className={classes.box}>
        <CardMedia
          className={classes.media}
          image={require("../../assets/BottleCapChallenge.gif")}
          title="Paella dish"
        />
      </Box>
      <Divider />
      <Box className={classes.box}>
        <CardMedia
          className={classes.media}
          image={require("../../assets/BottleCapChallenge.gif")}
          title="Paella dish"
        /></Box>
      <Divider />
    </div>
  );
}


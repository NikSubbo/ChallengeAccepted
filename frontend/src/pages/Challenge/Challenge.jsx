import React, { Fragment } from 'react';
import { Avatar, Box, CardHeader, Grid, Divider, Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../../components/Comments/Comments';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import NavBarIn from '../../components/NavBarIn/NavBarIn';
import Player from '../../components/Player/Player';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    alignItems: 'center',
  },
  container: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  box: {
    m: 'auto',
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    paddingTop: 25,
  },
}));

const Challenge = (props) => {
  const classes = useStyles();
  
console.log(props.state.challenges)
  return (
    <Fragment>
      <NavBarIn />
      <Container className={classes.container}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={11} sm={11} md={6} lg={6} xl={6}>
            <Grid container direction="column" spacing={0}>
              <Paper className={classes.paper}>
                <Typography color="primary" variant="h3" component="h3" align="center">Bottle Cup Challenge</Typography>
                <Divider />
                <Box height="auto" className={classes.box}>
                  <Player url={props.state.challenges[0].url} />
                </Box>
              </Paper>
              <CardHeader
                avatar={<Avatar alt="Van Damme" src={require("../../assets/van-damme.jpg")} aria-label="recipe" />}
                title=" Jean-Claude Van Damme"
                subheader="September 14, 2016"
              />
              <Paper className={classes.paper}>
                <Typography align="justify">Bottle Cup ChallengeA video with Jason Stathem - a very cool men. Jason Stathem is Very Cool, but Jean-Claude Van Damme is Jean-Claude Van Damme! :)  . Jason Stathem is Very Cool, but Jean-Claude Van Damme is Jean-Claude Van Damme! :)
              .Jason Stathem is Very Cool, but Jean-Claude Van Damme is Jean-Claude Van Damme! :) . Jason Stathem is Very Cool, but Jean-Claude Van Damme is Jean-Claude Van Damme! :) </Typography></Paper>
              <Divider />
              <Comments />
            </Grid>
          </Grid>
          <Grid item xs={11} sm={11} md={3} lg={3} xl={3} autoWidth={false}>
            <Paper style={{ overflow: 'auto' }}>
              <AnswerCard />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Challenge);

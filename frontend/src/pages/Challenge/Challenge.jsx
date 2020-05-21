import React, { Fragment, useEffect } from 'react';
import { Avatar, Box, CardHeader, Grid, Divider, Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../../components/Comments/Comments';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import NavBarIn from '../../components/NavBarIn/NavBarIn';
import Player from '../../components/Player/Player';
import { connect } from 'react-redux';
import UploadVideoBtn from '../../components/UploadVideoBtn/UploadVideoBtn';
import { fetchUserAC, fetchChallengesAC } from '../../redux/action-creator';

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

  const fetchData = async () => {
    await props.fetchUser();
  };

  const fetchDataChallenges = async () => {
    await props.fetchChallenges();
  };

  useEffect(() => {
    if (!props.state.challenges.length) {
      fetchDataChallenges();
    }
    if (!props.user) {
      fetchData();
    }
  }, []);

  const challenge = props.state.challenges.find((challenge) => challenge._id === props.match.params.id)

  return (
    <Fragment>
      <NavBarIn />
      <Container className={classes.container}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={11} sm={11} md={6} lg={6} xl={6}>
            <Grid container direction="column" spacing={0}>
              <Paper className={classes.paper}>
                <Typography color="primary" variant="h3" component="h3" align="center">{challenge.title}</Typography>
                <Divider />
                <Box height="auto" className={classes.box}>
                  <Player url={challenge.url} />
                </Box>
              </Paper>
              <CardHeader
                avatar={<Avatar alt="avatar" src={challenge.user.avatar} aria-label="recipe" />}
                title={challenge.user.name}
                subheader={challenge.date}
              />
              <Paper className={classes.paper}>
                <Typography align="justify">{challenge.description}</Typography></Paper>
              <Divider />
              <UploadVideoBtn
                original={false}
                btnName={"Answer Challenge"}
                formTitle={"Upload answer to the Challenge"}
                formDescription={"Can you do better? If yes, load your video and show, how it should be!"}
                challengeTitle={challenge.title}
              />
              <Comments challenge={challenge} user={props.state.user} />
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
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUserAC(user)),
  fetchChallenges: () => dispatch(fetchChallengesAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);

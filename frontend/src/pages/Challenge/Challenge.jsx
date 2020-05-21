import React, { Fragment, useEffect } from 'react';
import { Avatar, Box, Button, CardHeader, Grid, Divider, IconButton, Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../../components/Comments/Comments';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import NavBarIn from '../../components/NavBarIn/NavBarIn';
import Player from '../../components/Player/Player';
import { connect } from 'react-redux';
import UploadVideoBtn from '../../components/UploadVideoBtn/UploadVideoBtn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { fetchUserAC, fetchChallengesAC, fetchCommentsAC } from '../../redux/action-creator';

const useStyles = makeStyles((theme) => ({

  container: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  title: {
    color: '#6D676E',
    marginBottom: theme.spacing(2)
  },
  hashtags: {
    marginTop: theme.spacing(1),
    color: 'blue',
  },
  button: {
    backgroundColor: '#96031A',
    color: '#FAA916',
    '&:hover': {
      backgroundColor: '#FAA916',
      color: '#FBFFFE',
    }
  }
}));

const Challenge = (props) => {
  const classes = useStyles();

  const fetchData = async () => {
    await props.fetchUser();
  };

  const fetchDataChallenges = async () => {
    await props.fetchChallenges();
  };

  const fetchDataComments = async () => {
    await props.fetchComments();
  };

  useEffect(() => {
    if (!props.state.challenges.length) {
      fetchDataChallenges();
    }
    if (!props.user) {
      fetchData();
    }
    if (!props.state.comments.length) {
      fetchDataComments();
    }
  }, []);

  let filteredComments = props.state.comments.filter(el => el.challenge === props.match.params.id)

  useEffect(() => {
    filteredComments = props.state.comments.filter(el => el.challenge === props.match.params.id)
  }, [props.state.comments]);

  const challenge = props.state.challenges.find((challenge) => challenge._id === props.match.params.id)
  const comment = props.state.comments.filter((comment) => comment.challenge === props.match.params.id)

  //console.log('filteredComments', filteredComments)
  console.log(challenge)
  return (
    <Fragment>
      <NavBarIn />
      <Container className={classes.container}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs sm={12} md={9} lg={9} xl={9}>
            <Grid container direction="column" spacing={3}>
              <Box width={1} height="auto" className={classes.box}>
                <Paper className={classes.paper}>
                <Typography variant="h4" align="center" className={classes.title}>{challenge.title}</Typography>
                <Divider />
                  <Player url={challenge.url} />
                  <Grid container justify="left" spacing={1}>
                    <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                      <Typography color="textSecondary" variant="h6" component="h6" align="left">{challenge.date}</Typography>
                      <Typography className={classes.hashtags} variant="body2" component="p" align="left">{challenge.hashtags.map(el => { return (<>{el} </>) })}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <IconButton >
                        <FavoriteIcon className={classes.like} /> <Typography variant="body2" color="inherit" component="p">{challenge.likes.length}</Typography>
                      </IconButton>
                    </Grid>
                  </Grid>

                  <Divider />

                  <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
                    <Grid item xs={5} sm={6} md={7} lg={8} xl={8}>
                      <CardHeader className={classes.left}
                        avatar={<Avatar alt="avatar" src={challenge.user.avatar} aria-label="recipe" />}
                        title={challenge.user.name}
                        subheader={"127 Followers"}
                      />
                    </Grid>
                    <Grid item xs={7} sm={6} md={5} lg={4} xl={4}>
                      <Box my="5px">
                        <UploadVideoBtn
                          original={false}
                          btnName={"Answer Challenge"}
                          formTitle={"Upload answer to the Challenge"}
                          formDescription={"Can you do better? If yes, load your video and show, how it should be!"}
                          challengeTitle={challenge.title}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                      <Box className={classes.left}>
                        <Button className={classes.button}>Follow</Button></Box>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={11} xl={11}>
                      <Box className={classes.left}><Typography align="left"> {challenge.description}</Typography></Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
              <Divider />

              <Comments filteredComments={filteredComments} challengeId={challenge._id} comment={comment} user={props.state.user} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9} md={3} lg={3} xl={3}>
            <Paper style={{ overflow: 'auto' }}>
              <AnswerCard challenge={challenge}/>
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
  fetchComments: () => dispatch(fetchCommentsAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);

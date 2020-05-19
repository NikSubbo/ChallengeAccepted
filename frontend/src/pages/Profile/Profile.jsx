import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Box, Typography, Grid, Avatar, Paper, Container, Button } from '@material-ui/core';
import ProfileTabs from '../../components/ProfileTabs/ProfileTabs';
import NavBarIn from '../../components/NavBarIn/NavBarIn';
import { receiveUserAC } from '../../redux/action-creator'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: 'auto',
    textAlign: 'left',
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    height: '100%'
  },
}));

function Profile(props) {
  const classes = useStyles();

  useEffect(() => {

  }, [props.user]);

  const handleImgUploading = (e) => {
    const img = e.target.files[0];
    const id = props.user._id;
    const data = new FormData();
    data.append('file', img);
    const response = fetch(`/profile/uploadImg`, {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(imageUrl => fetch(`/profile/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: imageUrl.imageUrl, id })
      }))
      .then(res => res.json())
      .then(user => {
        props.updateUser(user.user)
      }
      )
      .catch(err => console.log(err));
  };

  return (
    <Fragment>
      <NavBarIn />
      {/* <Container className={classes.container}>
        <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={5} md={5} lg={4} xl={4}>
            <Paper className={classes.paper}>
              <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={2}> */}
      <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
        <Avatar alt="Van Damme" src={props.user.avatar} className={classes.large} />
        <input
          accept="image/*"
          className={classes.input}
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={handleImgUploading}
        />
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span" className={classes.button}>Upload Avatar</Button>
        </label>
      </Grid>
      {/* <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
                  <Box mx="auto" my="10px">
                    <Typography variant="subtitle1" >Followers: </Typography><Typography variant="h5" >10 </Typography>
                    <Typography variant="subtitle1" >Following: </Typography><Typography variant="h5" >165 </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
            <Paper className={classes.paper}>
              <Typography variant="h3" color="primary">Jean-Claude Van Damme</Typography>
              <Typography variant="h5" >van-damm@gmail.com</Typography>
              <Typography variant="body1" component="span" >Свою первую полноценную роль Ван Дамм получил в фильме «Не отступать и не сдаваться» (1986), сыграв русского бойца Ивана Крашинского. Из-за трудности при произношении имени, Жан-Клод Ван Варенберг сменил имя на Жан-Клод Ван Дамм, в память об умершем друге.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.root}>
              <ProfileTabs />
            </Paper>
          </Grid>
        </Grid>
      </Container> */}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({ updateUser: (user) => dispatch(receiveUserAC(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

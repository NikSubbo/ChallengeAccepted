import React, { Fragment, useEffect } from 'react';
import NavBarIn from '../../components/NavBarIn/NavBarIn';
import { connect } from 'react-redux';
import { fetchUserAC } from '../../redux/action-creator';
import MainTabs from '../../components/MainTabs/MainTabs'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const MainPage = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  const fetchData = async () => {
    await props.fetchUser();
  }

  useEffect(() => {
    if (!props.user) {
      fetchData();
    }
  }, [props.user])

  return (
    <Fragment>
      <NavBarIn />
      <Container className={classes.container}>
        <Grid item xs={12}>
          <MainTabs />
        </Grid>
      </Container>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUserAC(user)),
});

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

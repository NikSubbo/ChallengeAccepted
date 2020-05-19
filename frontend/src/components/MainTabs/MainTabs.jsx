import React from 'react';
import ChallengeVideoCard from '../../components/ChallengeVideoCard/ChallengeVideoCard'
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

  
const useStyles = makeStyles((theme) => ({
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  //   width: '100%',
  // },
  // paper: {
  //   margin: 200,
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   color: theme.palette.text.secondary,
  //   height: '100%'
  // },
}));

function MainTabs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>    
      <Grid container spacing={3} >
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}><ChallengeVideoCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}><ChallengeVideoCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}><ChallengeVideoCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}><ChallengeVideoCard /></Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}><ChallengeVideoCard /></Grid>
    </Grid>
    </div>
  )
}

export default MainTabs;

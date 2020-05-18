import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Avatar, Paper, Container } from '@material-ui/core';
import ProfileTabs from '../../components/ProfileTabs/ProfileTabs'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function CenteredTabs() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={5} md={5} lg={4} xl={4}>
          <Paper className={classes.paper}>
            <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={2}>
              <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
                <Avatar alt="Van Damme" src={require("../../assets/van-damme.jpg")} className={classes.large} />
              </Grid>
              <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
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
            <Typography variant="h3" component="h3" color="primary">Jean-Claude Van Damme</Typography>
            <Typography variant="h5" component="h5" >van-damm@gmail.com</Typography>
            <Typography variant="body1" component="p" >Свою первую полноценную роль Ван Дамм получил в фильме «Не отступать и не сдаваться» (1986), сыграв русского бойца Ивана Крашинского. Из-за трудности при произношении имени, Жан-Клод Ван Варенберг сменил имя на Жан-Клод Ван Дамм, в память об умершем друге.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.root}>
            <ProfileTabs />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

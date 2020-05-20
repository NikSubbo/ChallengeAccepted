import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton } from '@material-ui/core/';
import Player from '../Player/Player';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    // height: 0,
    // paddingTop: '100%', // '56.25%' - 16:9
  },
  profileLink: {
    textDecoration: 'none'
  },
  like: {
    color: '#96031A'
  }
}));

const ChallengeCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="Van Damme" src={require("../../assets/van-damme.jpg")} aria-label="recipe" />}
        title="Jean-Claude Van Damme"
        subheader="September 14, 2016"
      />
      <CardMedia className={classes.media}>
        <Player url={props.challenge.url} />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Jason Stathem is Very Cool, but Jean-Claude Van Damme is Jean-Claude Van Damme! :)
        </Typography>
      </CardContent>
      <Box mx='50px'><CardActions>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={classes.like} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">1256</Typography>

        <Button size="small"><Link className={classes.profileLink} to="/challenge">Open Challenge</Link></Button>

      </CardActions>
      </Box>
    </Card>
  );
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(ChallengeCard);

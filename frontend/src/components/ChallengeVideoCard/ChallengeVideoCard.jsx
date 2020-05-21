import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton } from '@material-ui/core/';
import Player from '../Player/Player';
import { connect } from 'react-redux';
import { fetchLikeAC } from '../../redux/action-creator';

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
  },
  hashtags: {
    marginTop: theme.spacing(1),
    color: 'blue',
  }
}));

const ChallengeCard = (props) => {
  const classes = useStyles();

  const handleLike = () => {
    const userId = props.state.user._id;
    const challengeId = props.challenge._id;
    props.fetchLike(userId, challengeId);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="avatar" src={props.challenge.user.avatar} aria-label="recipe" />}
        title={props.challenge.user.name}
        subheader={props.challenge.date}
      />
      <CardMedia className={classes.media}>
        <Player url={props.challenge.url} />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {props.challenge.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.challenge.description}
        </Typography>
        <Typography className={classes.hashtags} variant="body2" color="textSecondary" component="p">
          {
            props.challenge.hashtags
              ? props.challenge.hashtags.join().replace(/[,]/g, ' ')
              : null
          }
        </Typography>
      </CardContent>
      <Box mx='50px'><CardActions>

        <IconButton onClick={handleLike} >
          <FavoriteIcon className={classes.like} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">{props.challenge.likes.length}</Typography>

        <Button size="small"><Link className={classes.profileLink} to={`/challenge/${props.challenge._id}`}>Open Challenge</Link></Button>

      </CardActions>
      </Box>
    </Card>
  );
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  fetchLike: (id, userId) => dispatch(fetchLikeAC(id, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeCard);

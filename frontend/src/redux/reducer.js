import { ADD_USER, ADD_CHALLENGE, LOGOUT, ADD_COMMENT, ADD_LIKE, LOADING, ADD_FOLLOWING } from './action';

const initialState = {
  user: {
    name: '',
    email: '',
    avatar: '',
    about: '',
    googleId: '',
    facebookId: '',
    followers: [],
    following: [],
    challenges: [],
  },
    challenges: [],
    comments: [],
    loading: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const isChallenge = state.challenges.find(el => el.user._id === action.newUser._id);
      let challengesToUpdate = [...state.challenges];
      if (isChallenge) {
        challengesToUpdate.map(el => {
          return el.user._id === action.newUser._id 
          ? el.user.avatar = action.newUser.avatar
          : el
        });
      }
      return { ...state, user: action.newUser, challenges: challengesToUpdate }

    case ADD_CHALLENGE:
      return { ...state, challenges: [...state.challenges, action.newChallenge], loading: false }

    case ADD_LIKE:
      let updatedChallenges = state.challenges;
      const challengeToFind = state.challenges.find((el) => el._id === action.challenge);
      const index = state.challenges.indexOf(challengeToFind);
      let challenge = state.challenges.find((el) => el._id === action.challenge);
      if (challenge.likes.includes(action.newLike)) {
        challenge.likes.splice(challenge.likes.indexOf(action.newLike), 1);
      } else {
        challenge.likes.push(action.newLike);
      }
      updatedChallenges.splice(index, 1, challenge);
      return { ...state,  challenges: updatedChallenges }
    
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.newComment] }

    case ADD_FOLLOWING:
      let currUser = state.user;
      let currChallenges = state.challenges;
      let currChallenge = state.challenges.find(el => el._id === action.challengeId);
      let currChallengeUpd = state.challenges.find(el => el._id === action.challengeId);

      if (currUser.following.includes(action.newFollowing)) {
        currUser.following.splice(currUser.following.indexOf(action.newFollowing), 1);
        currChallengeUpd.user.followers.splice(currChallengeUpd.user.followers.indexOf(currUser._id), 1);
        currChallenges.splice(currChallenges.indexOf(currChallenge), 1, currChallengeUpd);
      } else {
        currUser.following.push(action.newFollowing);
        currChallengeUpd.user.followers.push(currUser._id);
        currChallenges.splice(currChallenges.indexOf(currChallenge), 1, currChallengeUpd);
      }
      return { ...state,  user: currUser, challenges: currChallenges}

    case LOGOUT:
      return { ...state, user: action.newUser }

    case LOADING:
      return { ...state, loading: true}

    default:
      return { ...state }
  }
}

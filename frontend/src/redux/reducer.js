import { ADD_USER, ADD_CHALLENGE, LOGOUT, ADD_LIKE, LOADING } from './action';

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
    loading: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.newUser }

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

    case LOGOUT:
      return { ...state, user: action.newUser }

    case LOADING:
      return { ...state, loading: true}

    default:
      return { ...state }
  }
}

import { ADD_USER, SEARCH_BY_HASHTAG, RECEIVE_USER } from './action';

const initialState = {
  user: '',
  challenges: [],
  filteredChallenges: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.newUser }

    case SEARCH_BY_HASHTAG:
      return {
        ...state,
        filteredChallenges: state.challenges.filter(challenge => challenge.hashtags.includes(action.payload.toLowerCase()))
      }

    case RECEIVE_USER:
      return { ...state, ['user']: action.user };

    default:
      return { ...state }
  }
}

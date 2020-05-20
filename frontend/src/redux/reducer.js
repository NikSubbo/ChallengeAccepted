import { ADD_USER, SEARCH_BY_HASHTAG, ADD_CHALLENGE } from './action';

const initialState = {
  user: '',
  challenges: [],
  filteredChallenges: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.newUser }

    case ADD_CHALLENGE:
      return { ...state, challenges: [...state.challenges, action.newChallenge] }
    
    // case SEARCH_BY_HASHTAG:
    //   const array =  state.challenges.filter((challenge) => challenge.hashtags.includes(+action.payload));
    //   return {
    //     ...state,
    //     filteredChallenges: [...array]
    //   }
  
    default:
      return { ...state }
  }
}

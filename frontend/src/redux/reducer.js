import { ADD_USER, SEARCH_BY_HASHTAG, ADD_CHALLENGE } from './action';

const initialState = {
  user: '',
  challenges: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.newUser }

    case ADD_CHALLENGE:
      return { ...state, challenges: [...state.challenges, action.newChallenge] }
  
    default:
      return { ...state }
  }
}

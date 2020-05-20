import { ADD_USER, ADD_CHALLENGE, RECEIVE_USER } from './action';

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

    case RECEIVE_USER:
      return { ...state, ['user']: action.user };

    default:
      return { ...state }
  }
}

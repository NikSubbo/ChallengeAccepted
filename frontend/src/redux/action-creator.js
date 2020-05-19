import { ADD_USER, SIGNUP, LOGIN, LOGOUT, SEARCH_BY_HASHTAG } from './action';

export const addUserAC = (user) => ({
  type: ADD_USER,
  newUser: { ...user },
});

export const searchTextAC = (text) => ({
  type: SEARCH_BY_HASHTAG,
  payload: text,
});

export const fetchUserAC = () => {
  return async (dispatch) => {
    const response = await fetch('/auth/login/success', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    if (result.success) {
      dispatch(addUserAC(result.user));
    }
    return result;
  }
}

export const fetchSignupAC = (name, email, password) => {
  return async (dispatch) => {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, password
      }),
    });
    const result = await response.json();
    return result;
  }
}

export const fetchLoginAC = (email, password) => {
  return async (dispatch) => {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      }),
    });
    const result = await response.json();
    return result;
  }
}


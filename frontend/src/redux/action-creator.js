import { ADD_USER, SIGNUP, LOGIN, LOGOUT, ADD_CHALLENGE, RECEIVE_USER } from './action';

export const addUserAC = (user) => ({
  type: ADD_USER,
  newUser: { ...user },
});

export const addChallengeAC = (challenge) => ({
  type: ADD_CHALLENGE,
  newChallenge: challenge,
});

export const fetchUserAC = () => {
  return async (dispatch) => {
    const response = await fetch('/auth/login/success', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result.success) {
      dispatch(addUserAC(result.user));
    }
    return result;
  };
};

export const fetchSignupAC = (name, email, password) => {
  return async (dispatch) => {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const result = await response.json();
    return result;
  };
};

export const fetchLoginAC = (email, password) => {
  return async (dispatch) => {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    return result;
  };
};

export const receiveUserAC = (user) => ({
  type: RECEIVE_USER,
  user: user
});
export const fetchChallengesAC = () => {
  return async (dispatch) => {
    const response = await fetch('/challenges', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    for (let i = 0; i < result.length; i++) {
      dispatch(addChallengeAC(result[i]));
    }
  };
};

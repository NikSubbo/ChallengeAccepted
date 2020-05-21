import { ADD_USER, SIGNUP, LOGIN, LOGOUT, ADD_CHALLENGE, ADD_LIKE } from './action';

export const addUserAC = (user) => ({
  type: ADD_USER,
  newUser: { ...user },
});

export const logoutAC = () => ({
  type: LOGOUT,
  newUser: ''
})

export const addChallengeAC = (challenge) => ({
  type: ADD_CHALLENGE,
  newChallenge: challenge,
});

export const addLikeAC = (userId, challengeId) => ({
  type: ADD_LIKE,
  newLike: userId,
  challenge: challengeId,
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

export const fetchLogOutAC = () => {
  return async(dispatch) => {
    const response = await fetch('/auth/logout', {
      method: 'GET',
    });
    if(response.redirected) {
      dispatch(logoutAC)
      window.location.href = response.url;
    }
  }
}

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

export const fetchLikeAC = (userId, challengeId) => {
  return async (dispatch) => {
    const response = await fetch(`/challenges/${challengeId}/like`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: challengeId,
        userId: userId,
      }),
    });
    if (response.ok) {
      dispatch(addLikeAC(userId, challengeId));
    } 
  }
}

// Action creator for login success
export const loginSuccess = (token) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: token,
  };
};

// Action creator for logout
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

import userTypes from './user.types';

export const emailSignInStart = (userCredeintials) => ({
  type: userTypes.EMAIL_SIGNIN_START,
  payload: userCredeintials,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userCredeintials) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredeintials,
});

export const userError = (error) => ({
  type: userTypes.USER_ERROR,
  payload: error,
});

export const resetPasswordStart = (userCredeintials) => ({
  type: userTypes.RESET_PASSWORD_START,
  payload: userCredeintials,
});

export const resetPasswordSuccess = () => ({
  type: userTypes.RESET_PASSWORD_SUCCESS,
  payload: true,
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});

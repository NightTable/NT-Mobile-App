import { LOGIN_OTP_TRIGGERED } from "../Actions/Auth";

//initial state
const initial_state = {
  loginOtpTriggered: false,
};

export default function  (state = initial_state, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_OTP_TRIGGERED:
      return { ...state, user: payload, loginOtpTriggered: false };

    default:
      return state;
  }
}

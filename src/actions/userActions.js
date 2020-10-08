import axios from "axios";
import Cookie from "js-cookie";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/Constants";

const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    const url =
      "https://api.finlogix.com/v1/auth/email/login?email=" +
      email +
      "&password=" +
      password;
    const { data } = await axios(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        withCredentials: true,
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    //= fetch(url,{method: "POST"});
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
};

const logout = () => async (dispatch, getState) => {
  /*try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const { data } = await axios.post(
      "https://api.finlogix.com/v1/auth/logout",
      { headers: { Authorization: `Bearer ${userInfo.token}`,Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest", } }
    );
    dispatch({ type: USER_LOGOUT_SUCCESS, payload: {msg: "Logout successfully"} });
    Cookie.remove("userInfo");
  } catch (error) {
    dispatch({ type: USER_LOGOUT_FAIL, payload: error.message });
  }*/
  Cookie.remove("userInfo");
	dispatch({type:USER_LOGOUT});
};
export { login, logout };

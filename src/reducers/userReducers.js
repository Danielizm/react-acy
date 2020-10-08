import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
  } from "../constants/Constants";

  const userLoginReducer = (state={},action) => {
	switch(action.type){
		case USER_LOGIN_REQUEST:
		return {loading:true}
		case USER_LOGIN_SUCCESS:
		return {loading:false,userInfo:action.payload};
		case USER_LOGIN_FAIL:
		return {loading:false,error:action.payload};
		case USER_LOGOUT:
		return {};
		default:
		return state;
	}
};
/*const userLogoutReducer = (state={},action) => {
	switch(action.type){
		case USER_LOGOUT_REQUEST:
		return {}
		case USER_LOGOUT_SUCCESS:
		return {};
		case USER_LOGOUT_FAIL:
		return {error:action.payload};
		default:
		return state;
	}
};*/
export {userLoginReducer};
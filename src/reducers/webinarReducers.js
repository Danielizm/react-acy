import {
    WEBINAR_LIST_REQUEST,
    WEBINAR_LIST_SUCCESS,
    WEBINAR_LIST_FAIL,
    WEBINART_LIST_REQUEST,
    WEBINART_LIST_SUCCESS,
    WEBINART_LIST_FAIL,
    TOPIC_ADD_REQUEST,
    TOPIC_ADD_SUCCESS,
    TOPIC_ADD_FAIL,
    REGISTED_LIST_REQUEST,
    REGISTED_LIST_SUCCESS,
    REGISTED_LIST_FAIL,
    UNREGISTER_REQUEST,
    UNREGISTER_SUCCESS,
    UNREGISTER_FAIL,
} from "../constants/Constants";

const webinarListReducer = (state = {webinars: []}, action ) => {
	switch (action.type){
		case WEBINAR_LIST_REQUEST:
		return {loading:true};
		case WEBINAR_LIST_SUCCESS:
		return {loading:false, webinars:action.payload};
		case WEBINAR_LIST_FAIL:
		return {loading:false, error: action.payload}
		default:
		return state;
	}
}

const webinarListTokenReducer = (state = {webinarsT: []}, action ) => {
	switch (action.type){
		case WEBINART_LIST_REQUEST:
		return {tloading:true};
		case WEBINART_LIST_SUCCESS:
		return {tloading:false, webinarsT:action.payload};
		case WEBINART_LIST_FAIL:
		return {tloading:false, terror: action.payload}
		default:
		return state;
	}
}

const registedListReducer = (state = {registed: []}, action ) => {
	switch (action.type){
		case REGISTED_LIST_REQUEST:
		return {rloading:true};
		case REGISTED_LIST_SUCCESS:
		return {rloading:false, registed:action.payload};
		case REGISTED_LIST_FAIL:
		return {rloading:false, rerror: action.payload}
		default:
		return state;
	}
}

const topicAddReducer = (state = {}, action ) => {
	switch (action.type){
		case TOPIC_ADD_REQUEST:
		return {};
		case TOPIC_ADD_SUCCESS:
		return {topicid:action.payload};
		case TOPIC_ADD_FAIL:
		return {error: action.payload}
		default:
		return state;
	}
}

const unregisterReducer = (state = {}, action) => {
    switch (action.type) {
      case UNREGISTER_REQUEST:
        return {loading: true,};
      case UNREGISTER_SUCCESS:
        return { loading: false, success: true };
      case UNREGISTER_FAIL:
        return { loading: false, error:action.payload };
      default: return state;
    }
  }

export {webinarListReducer,webinarListTokenReducer,topicAddReducer,registedListReducer,unregisterReducer}
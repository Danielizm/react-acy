import {
    WEBINAR_LIST_REQUEST,
    WEBINAR_LIST_SUCCESS,
    WEBINAR_LIST_FAIL,
    TOPIC_ADD_REQUEST,
    TOPIC_ADD_SUCCESS,
    TOPIC_ADD_FAIL,
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

export {webinarListReducer,topicAddReducer}
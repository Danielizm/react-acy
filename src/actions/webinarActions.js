import axios from "axios";
import {
    WEBINAR_LIST_REQUEST,
    WEBINAR_LIST_SUCCESS,
    WEBINAR_LIST_FAIL,
    TOPIC_ADD_REQUEST,
    TOPIC_ADD_SUCCESS,
    TOPIC_ADD_FAIL,
} from "../constants/Constants";

const listWebinar = () => async (dispatch) => {
	try{
		dispatch({type:WEBINAR_LIST_REQUEST});
	    const {data} = await axios.get("https://api.finlogix.com/v1/posts?per_page=12&page=1");
	    dispatch({type:WEBINAR_LIST_SUCCESS,payload:data.data});
    }
    catch(error){
    	dispatch({type:WEBINAR_LIST_FAIL,payload:error.message});
    }
};

const addTopic = (id) => async (dispatch) => {
	try{
		dispatch({type:TOPIC_ADD_REQUEST,payload:id});
	    dispatch({type:TOPIC_ADD_SUCCESS,payload:id});
    }
    catch(error){
    	dispatch({type:TOPIC_ADD_FAIL,payload:error.message});
    }
};

export {listWebinar,addTopic};
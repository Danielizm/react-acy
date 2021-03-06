import axios from "axios";
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
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UNREGISTER_REQUEST,
    UNREGISTER_SUCCESS,
    UNREGISTER_FAIL,
} from "../constants/Constants";

const listWebinarWithToken = (page) => async (dispatch,getState) => {
	try{
        dispatch({type:WEBINART_LIST_REQUEST});
        const {userLogin:{userInfo}} = getState();
        //let allData = []
        const headers = {headers:{Authorization: `Bearer ${userInfo.token}`}}
        //for(let i=1;i<=3;i++){
        const {data} = await axios.get(`/v1/posts?per_page=12&page=${page}`,headers);
        //allData = allData.concat(data.data)
        //}
	    dispatch({type:WEBINART_LIST_SUCCESS,payload:data.data});
    }
    catch(error){
    	dispatch({type:WEBINART_LIST_FAIL,payload:error.message});
    }
};

const listWebinar = (page) => async (dispatch) => {
	try{
        dispatch({type:WEBINAR_LIST_REQUEST});
        //let allData = []
        //for(let i=1;i<=3;i++){
        const {data} = await axios.get(`/v1/posts?per_page=12&page=${page}`);
        //allData = allData.concat(data.data)
        //}
	    dispatch({type:WEBINAR_LIST_SUCCESS,payload:data.data});
    }
    catch(error){
    	dispatch({type:WEBINAR_LIST_FAIL,payload:error.message});
    }
};

const listRegisted = () => async (dispatch,getState) => {
	try{
        dispatch({type:REGISTED_LIST_REQUEST});
        const {userLogin:{userInfo}} = getState();
        const user = userInfo.user
        const query = `/v1/posts?favourited=1&author=${user.id}`
        const headers = {headers:{Authorization: `Bearer ${userInfo.token}`}}
        const {data} = await axios.get(query,headers)
	    dispatch({type:REGISTED_LIST_SUCCESS,payload:data.data});
    }
    catch(error){
    	dispatch({type:REGISTED_LIST_FAIL,payload:error.message});
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

const registerW = ({id,topic,firstName,lastName,email}) => async (dispatch,getState) => {
	try{
		dispatch({type:REGISTER_REQUEST, payload:id});
        const {userLogin:{userInfo}} = getState();
		const query = `/v1/favourites?ids[]=${id}?model=post`
        const headers = {headers:{Authorization: `Bearer ${userInfo.token}`}}
        const response = await axios.post(query,headers)
		dispatch({type:REGISTER_SUCCESS, payload:response.data});
	}
	catch(error){
		dispatch({type:REGISTER_FAIL, payload:error.message});
	}
};

const unregister = (id) => async (dispatch,getState) => {
	try{
		dispatch({type:UNREGISTER_REQUEST, payload:id});
        const {userLogin:{userInfo}} = getState();
		const query = `/v1/favourites/post/${id}`
        const headers = {headers:{Authorization: `Bearer ${userInfo.token}`}}
        const response = await axios.delete(query,headers)
		dispatch({type:UNREGISTER_SUCCESS, payload:response.data});
	}
	catch(error){
		dispatch({type:UNREGISTER_FAIL, payload:error.message});
	}
};

export {listWebinar,listWebinarWithToken,addTopic,listRegisted,registerW,unregister};
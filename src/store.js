import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {userLoginReducer} from './reducers/userReducers';
import {webinarListReducer,webinarListTokenReducer,topicAddReducer,registedListReducer,unregisterReducer} from './reducers/webinarReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {userLogin:{userInfo}};
const reducer =combineReducers({
    webinarList:webinarListReducer,
    webinarListToken:webinarListTokenReducer,
    userLogin:userLoginReducer,
    //userLogout:userLogoutReducer,
    topicAdd:topicAddReducer,
    registedList:registedListReducer,
    unregisterR:unregisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;
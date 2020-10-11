import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {registerW} from '../actions/webinarActions'

const Form = () => {
  const [topic,setTopic] = useState('');
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [topicError, setTopicError] = useState(null);
  const [firstError, setFirstError] = useState(null);
  const [lastError, setLastError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [valid, setValid] = useState(true);
  //const [clear, setClear] = useState(false);
  const webinarList = useSelector(state=>state.webinarList)
  const {webinars,loading,error} = webinarList
  const webinarListToken = useSelector(state=>state.webinarListToken)
  const {webinarsT,tloading,terror} = webinarListToken
  const topicAdd = useSelector(state=>state.topicAdd)
  const id = topicAdd.topicid
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  const register = useSelector((state) => state.register);
  const {sucess} = register;
  const dispatch = useDispatch;
  useEffect(() => {
    return () => {
    }
  }, [topic,firstName,lastName,email])
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerW({id,topic,firstName,lastName,email}));
    console.log(topic,firstName,lastName,email);
    if(sucess){
      alert("Register successfully")
    }else{
      alert("Register unsuccessfully")
    }
    setTopic('')
    setFirstName("")
    setLastName("")
    setEmail("")
  };
  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.length === 0){
      setEmailError("Email required")
      setValid(true)
    }else if(!re.test(email)){
      setEmailError("Invalid email")
      setValid(true)
    }else{
      setEmailError('')
      setValid(false)
    }
  };
  const validateTopic = () =>{
    if(topic.length === 0){
      setTopicError("Please choose a topic")
      setValid(true)
    }else{
      setTopicError('')
      setValid(false)
    }
  };
  const validateFirst = () =>{
    if(firstName.length === 0){
      setFirstError("First name required")
      setValid(true)
    }else{
      setFirstError('')
      setValid(false)
    }
  };
  const validateLast = () =>{
    if(lastName.length === 0){
      setLastError("Last name required")
      setValid(true)
    }else{
      setLastError('')
      setValid(false)
    }
  };
  return (
    <div className="register" id="register">
      <div className="container">
        <div className="register-form">
          <form action="" onSubmit={submitHandler} className="box">
            <ul className="form-container">
              <li className="text-center">
                <h2>Register for a Webinar now</h2>
                <p>Please fill in the form below and you will be contacted by one of our professional business experts.</p>
              </li>
              <li>
                <label htmlFor="topic">Topic</label>
                {topicError !== null && (<span className="error-msg">{topicError}</span>) }
                {(userInfo && tloading) ? <div className="text-center">Loading...</div> : (userInfo && terror) ? <div className="text-center">{terror}</div> : 
            (!userInfo && loading) ? <div className="text-center">Loading...</div> : (!userInfo && error) ? <div className="text-center">{error}</div> :
                <div className="selectdiv">
                <select
                  name="topic"
                  id="topic"
                  value={topicAdd.topicid?topicAdd.topicid:topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onBlur={validateTopic}
                >
                  <option value=''>Select a topic</option>
                  {userInfo ?
                  webinarsT.filter(x => x.favourited === false).map(w=>(
                  <option key={w.id} value={w.id}>{w.title}</option>
                  )):
                  webinars.map(w=>(
                    <option key={w.id} value={w.id}>{w.title}</option>
                    ))}
                </select></div> }
              </li>
              <li>
                <label htmlFor="firstName">First Name</label>
                {firstError !== null && (<span className="error-msg">{firstError}</span>) }
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  onBlur={validateFirst}
                />
              </li>
              <li>
                <label htmlFor="lastName">Last Name</label>
                {lastError !== null && (<span className="error-msg">{lastError}</span>) }
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  onBlur={validateLast}
                />
              </li>
              <li>
                <label htmlFor="email">Email</label>
                {emailError !== null && (<span className="error-msg">{emailError}</span>) }
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onBlur={validateEmail}
                />
              </li>
              <li>
                <button type="submit" className="button" disabled={(valid)?true:false}>
                  Register
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError,setEmailError] = useState(null);
  const [pwError,setPwError] = useState(null);
  const errors = [emailError,pwError];
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  const redirect = "/";
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    console.log(email, password);
  };
  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.length === 0){
      setEmailError("Email required")
    }else if(!re.test(email)){
      setEmailError("Invalid email")
    }else{
      setEmailError(null)
    }
  };
  const validatePw = () =>{
    if(password.length === 0){
      setPwError("Password required")
    }else{
      setPwError(null)
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="login-form">
          <form action="" onSubmit={submitHandler} className="box">
            <ul className="form-container">
              <li>
                <h1>Login</h1>
              </li>
              <li>
                {error && <div className="error-msg">{error}</div>}
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
                  className={emailError !== null ? "invalid":""}
                />
              </li>
              <li>
                <label htmlFor="password">Password</label>
                {pwError !== null && (<span className="error-msg">{pwError}</span>) }
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onBlur={validatePw}
                  className={pwError !== null ? "invalid":""}
                />
              </li>
              <li>
                <button type="submit" className="button" disabled={(errors.some(x=> x !== null) || email.length === 0 || password.length === 0) ?true:false}>
                {loading ? (<div>Loging...</div>):"Login"}
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

import React,{useEffect} from 'react'
import { useSelector } from "react-redux"
import {Link,Redirect} from 'react-router-dom'

const Profile = (props) => {
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const {user} = userInfo?userInfo:{};
    useEffect(() => {
        return () => {
        }
    }, [userInfo])
    if(userInfo){
    return (
        <div className="profile">
            <div className="container">
                <div className="box text-center">
                    <div className="profile-container">
                    <h1>User Info</h1>
    <p>User ID : {user.id}</p>
    <p>Name : {user.name}</p>
    <p>Username : {user.username}</p>
    <p>Email : {user.username}</p>
    {/*<p>Token : {token}</p>*/}
    <Link to="/registed" className="btn-primary">See registed webinar</Link>
    </div>
                </div>
            </div>
        </div>
    )}else{
      return <Redirect to="/login"/>
    }
}

export default Profile

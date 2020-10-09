import React,{useEffect} from 'react'
import { useSelector } from "react-redux"
//import axios from 'axios'
import {Link} from 'react-router-dom'

const Profile = (props) => {
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const {user} = userInfo;
    /*const getPost = async () => {  
        const query = `https://api.finlogix.com/v1/posts?favourited=1&author=124`
        const headers = {headers:{Authorization: `Bearer ${token}`}}
        const response = await axios.get(query,headers)
        const a = response.data
        console.log(a)
      }
      const getaPost = async () => {  
        const query = `https://api.finlogix.com/v1/posts?per_page=12&page=2`
        const headers = {headers:{Authorization: `Bearer ${token}`}}
        const response = await axios.get(query,headers)
        const a = response.data
        console.log(a)
      }
      const getbPost = async () => {  
        const query = `https://api.finlogix.com/v1/favourites?ids[]=4630&model=post`
        const headers = {headers:{Authorization: `Bearer ${token}`}}
        const response = await axios.post(query,headers)
        const a = response.data
        console.log(a)
      }*/
    useEffect(() => {
        //getPost()
        //getaPost()
        //getbPost()
        return () => {
        }
    }, [userInfo])
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
    )
}

export default Profile

import React,{useEffect} from 'react'
import { useSelector } from "react-redux"


const Profile = (props) => {
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const {user,token} = userInfo;
    useEffect(() => {
        if(userInfo){
        /*async function fetchData(){
        const {data} = await axios.post('https://api.finlogix.com/v1/auth/me',{headers:{'Content-Type' : 'application/json',
        'Accept' : 'application/json', Authorization:'Bearer ' + userInfo.token}});
        console.log(data)
        }
        fetchData()*/
       }else{
           props.history.push('/login')
       }
        return () => {
        }
    }, [userInfo,props.history])
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
    <p>Token : {token}</p>
    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

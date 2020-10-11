import React,{useEffect} from 'react'
import Card from '../components/Card'
import {useSelector,useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {listRegisted} from '../actions/webinarActions'

const Registed = () => {
    const registedList = useSelector(state=>state.registedList)
    const {registed,rloading,rerror} = registedList
    const unregisterR = useSelector((state) => state.unregisterR);
    const {success:successUnregister} = unregisterR
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const dispatch = useDispatch()

        useEffect(() => {
            dispatch(listRegisted());
            return () => {
            }
        }, [dispatch,successUnregister])
    if(userInfo){
    return (
        <div className="registed">
            {rloading ? <div className="text-center">Loading...</div> : rerror ? <div className="text-center">{rerror}</div> :
            <div className="container">
            <div className="card-wrap">
                  <div className="card-inner">
                {registed.map(w=>(
                <Card key={w.id} id={w.id} date={w.created_at} title={w.title} favourite={w.favourited} content={w.content}/>))
                }
                </div> 
            </div>
            </div>
            }
        </div>
    )}else{
      return <Redirect to="/login"/>
    }
}

export default Registed

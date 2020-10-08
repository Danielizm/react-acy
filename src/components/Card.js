import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Arrow from '../arrow.svg'
import ReactHtmlParser from 'react-html-parser';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {addTopic} from '../actions/webinarActions'


const Card = (props) => {
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const dispatch =useDispatch()
    const d = new Date(props.date);
const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
const date = `${da}/${mo}/${ye}`
const addDays = (date, days) => {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}
  const newDate = addDays(d, 10);
  const newye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
const newmo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(newDate);
const newda = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
const newho = new Intl.DateTimeFormat('en', { hour: 'numeric',hour12: false, }).format(newDate);
const newmi = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(newDate);
const endDate = `${newye}-${newmo}-${newda}  ${newho}:${newmi}`
const id = props.id
const handleAddTopic = () =>{
    dispatch(addTopic(id))
    console.log(id)
}
    return (
        <div className="card">
            <div className="text">
                <div className="date">{date}</div>
                <h2>{props.title}</h2>
                <div className="content">{ReactHtmlParser(props.content)}</div>
                <p className="time">{endDate}</p>
            </div>
            <div className="links">
                {userInfo ? (
                <AnchorLink href='#register' className="reg-link" onClick={()=>{handleAddTopic();return true;}}>Register Now</AnchorLink>) :
                (<Link to="/login" className="reg-link">Register Now</Link>)   }             
                <Link to={'/webinar/:'+props.id}><img src={Arrow} alt='arrow'/></Link>
            </div>
        </div>
    )
}

export default Card

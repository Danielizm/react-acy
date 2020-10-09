import React from 'react'
import {useSelector} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom'

const Webinar = (props) => {
    const wid = props.match.params.id.split(':')[1]
    const webinarList = useSelector(state=>state.webinarList)
    const {webinars,loading,error} = webinarList
    //const registedList = useSelector(state=>state.registedList)
    //const {registed,rloading,rerror} = registedList

    return (
        <div className="webinar-detail">
            <div className="container">
                <Link to="/">Go Back</Link>
                <div className="box">
                {loading ? (<div className="text-center">Loading...</div> ) : error ? <div className="text-center">{error}</div> : 
                <div className="detail-wrap">
                    <h1>Webinar Detail</h1>
                    {webinars.filter(w => w.id.toString() === wid.toString()).map(x=>(
                        <div key={x.id}>
                        <h2>{x.title}</h2>
                    <p>{x.id}</p>
                    <p>{x.creat_at}</p>
                    <div>{ReactHtmlParser(x.content)}</div>
                    </div>
                    ))}
                </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Webinar

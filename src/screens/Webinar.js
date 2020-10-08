import React from 'react'
import {useSelector} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

const Webinar = (props) => {
    const wid = props.match.params.id.split(':')[1]
    const webinarList = useSelector(state=>state.webinarList)
    const {webinars,loading,error} = webinarList

    return (
        <div className="webinar-detail">
            <div className="container">
                <div className="box">
                {loading ? <div className="text-center">Loading...</div> : error ? <div className="text-center">{error}</div> : 
                <div className="detail-wrap">
                    <h1>Webinar Detail</h1>
                    {webinars.filter(w => w.id.toString() === wid.toString()).map(x=>(
                        <div key={x.id}>
                        <h2>{x.title}</h2>
                    <p>{x.id}</p>
                    <p>{x.creat_at}</p>
                    <p>{ReactHtmlParser(x.content)}</p>
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

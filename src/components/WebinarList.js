import React,{useEffect} from 'react'
import Card from './Card'
import {useSelector,useDispatch} from 'react-redux';
import {listWebinar,listWebinarWithToken} from '../actions/webinarActions'
import Slider from "react-slick";

const WebinarList = () => {
    const webinarList = useSelector(state=>state.webinarList)
    const {webinars,loading,error} = webinarList
    const webinarListToken = useSelector(state=>state.webinarListToken)
    const {webinarsT,tloading,terror} = webinarListToken
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    //const {data} = webinars
    const dispatch = useDispatch()
    const settings = {
      infinite: true,
      //lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      //rows: 3,
      slidesPerRow: 2,
      responsive: [
        {
          breakpoint: 578,
          settings: {
            //lazyLoad: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            slidesPerRow: 6,
          }
        },]
      };

    useEffect(() => {
        if(userInfo){
        dispatch(listWebinarWithToken());
        }else{
            dispatch(listWebinar());  
        }
        return () => {
        }
    }, [dispatch,userInfo])
    return (
        <div className='webinar-list'>
            {(userInfo && tloading) ? <div className="text-center">Loading...</div> : (userInfo && terror) ? <div className="text-center">{terror}</div> : 
            (!userInfo && loading) ? <div className="text-center">Loading...</div> : (!userInfo && error) ? <div className="text-center">{error}</div> : 
            <div className="container">
                <Slider {...settings}>
                {/*<div className="card-wrap">*/}
                {userInfo ?
                webinarsT.filter(x => x.favourited === false).map(w=>(
                <Card key={w.id} id={w.id} date={w.created_at} title={w.title} favourite={w.favourited} content={w.content}/>)) : 
                webinars.map(w=>(
                    <Card key={w.id} id={w.id} date={w.created_at} title={w.title} favourite={w.favourited} content={w.content}/>)) 
                }
                {/*</div>*/}  
                </Slider>         
            </div>
            }
        </div>
    )
}

export default WebinarList

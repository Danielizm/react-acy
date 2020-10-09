import React,{useEffect} from 'react'
import Card from '../components/Card'
import {useSelector,useDispatch} from 'react-redux';
import {listRegisted} from '../actions/webinarActions'
import Slider from "react-slick";

const Registed = () => {
    const registedList = useSelector(state=>state.registedList)
    const {registed,rloading,rerror} = registedList
    const unregisterR = useSelector((state) => state.unregisterR);
    const {success:successUnregister} = unregisterR
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
            dispatch(listRegisted());
            return () => {
            }
        }, [dispatch,successUnregister])
    return (
        <div className="registed">
            {rloading ? <div className="text-center">Loading...</div> : rerror ? <div className="text-center">{rerror}</div> :
            <div className="container">
            <Slider {...settings}>
                {/*<div className="card-wrap">*/}
                {registed.map(w=>(
                <Card key={w.id} id={w.id} date={w.created_at} title={w.title} favourite={w.favourited} content={w.content}/>))
                }
                {/*</div>*/}  
            </Slider>
            </div>
            }
        </div>
    )
}

export default Registed

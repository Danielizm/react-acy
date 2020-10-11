import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
//import { listWebinar, listWebinarWithToken } from "../actions/webinarActions";
import axios from "axios";

const WebinarList = () => {
  /*const webinarList = useSelector(state=>state.webinarList)
    const {webinars,loading,error} = webinarList
    const webinarListToken = useSelector(state=>state.webinarListToken)
    const {webinarsT,tloading,terror} = webinarListToken*/
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [view,setView] = useState(false);
  //const dispatch = useDispatch()

  /*const getPosts = () => {
      if(userInfo){
            dispatch(listWebinarWithToken(page));
        }else{
            dispatch(listWebinar(page));
        }
    }*/

  const getPosts = async (page) => {
    setLoading(true);
    if (userInfo) {
      const headers = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
      await axios
        .get(`/v1/posts?per_page=12&page=${page}`, headers)
        .then((res) => {
          setPosts([...posts, ...res.data.data]);
          setMeta(res.data.meta.pagination.total_pages);
          setLoading(false);
        });
    } else {
      await axios.get(`/v1/posts?per_page=12&page=${page}`).then((res) => {
        setPosts([...posts, ...res.data.data]);
        setMeta(res.data.meta.pagination.total_pages);
        setLoading(false);
      });
    }
  };

  let content;
  if (userInfo) {
    content = posts
      .filter((x) => x.favourited === false)
      .map((w,index) => (
        <Card
          key={index}
          id={w.id}
          date={w.created_at}
          title={w.title}
          favourite={w.favourited}
          content={w.content}
        />
      ));
  } else {
    content = posts.map((w,index) => (
      <Card
        key={index}
        id={w.id}
        date={w.created_at}
        title={w.title}
        favourite={w.favourited}
        content={w.content}
      />
    ));
  }

  useEffect(() => {
    getPosts(page);
    
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleObserver = (entities, observer) => {
      const x = entities[0].intersectionRatio;
      if (x === 1) {
        setView(true)
        if (page <= meta) {
          getPosts(page+1);
          setPage(page+1);
        }
      }else{
        setView(false)
      }
    };
    let observer = new IntersectionObserver(handleObserver, options);
    const target = document.getElementById("loading");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [userInfo,view]);

  const loadingCSS = {
    width: "50px",
    margin: "auto",
  };

  const loadingTextCSS = { display: loading ? "block" : "none" };

  return (
    <div className="webinar-list">
      <div className="container">
        <div className="card-wrap">
          <div className="card-inner">
            {content}
            <div
              className="text-center"
              id="loading"
              style={loadingCSS}
              //ref={ref}
            >
              <span style={loadingTextCSS}>Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarList;

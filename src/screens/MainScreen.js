import React from 'react'
import Intro from '../components/Intro'
import Video from '../components/Video'
import Form from '../components/Form'
import WebinarList from '../components/WebinarList'

const MainScreen = () => {
    return (
        <div className="main">
            <Intro/>
            <WebinarList />
            <Video/>
            <Form />
        </div>
    )
}

export default MainScreen

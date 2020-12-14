import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/organism/banner'
import Opinion from '../components/organism/opinion'
import Events from '../components/organism/events'
import Stories from '../components/organism/stories'
import Dialogues from '../components/organism/dialogues'
import FollowUs from '../components/organism/follow-us'

const Home = () => {
    return (
        <Layout>
            <Banner/>
            <Opinion/>
            <Events/>
            <Stories/>
            <Dialogues/>
            <FollowUs/>
        </Layout>
    )
}

export default Home

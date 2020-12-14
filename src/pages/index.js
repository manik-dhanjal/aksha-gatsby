import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Banner from '../components/organism/banner'
import Opinion from '../components/organism/opinion'
import Events from '../components/organism/events'
import Stories from '../components/organism/stories'
import Dialogues from '../components/organism/dialogues'
import FollowUs from '../components/organism/follow-us'

const Home = ({data}) => {
    const opinionData = data.allWordpressWpOpinion.nodes;
    console.log(opinionData)
    return (
        <Layout>
            <Banner/>
            <Opinion data={opinionData}/>
            <Events/>
            <Stories/>
            <Dialogues/>
            <FollowUs/>
        </Layout>
    )
}

export default Home

export const query = graphql`
query homeQuery {
    allWordpressWpOpinion(limit: 3) {
        nodes {
          slug
          title
          content
          acf {
            short_description
            banner_image {
              source_url
            }
          }
        }
      }
    }    
`

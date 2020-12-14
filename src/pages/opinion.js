import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/atom/template-head'
import Card from '../components/molecule/opinion-temp-card'

const Opinion = ({data}) => {
    const opinionData = data.allWordpressWpOpinion.nodes;
    return (
        <Layout>
            <Head>Opinion</Head>
            {opinionData.map((posts,i)=><Card {...posts} desc={posts.acf.short_description} img={posts.acf.banner_image.source_url} i={i} key={i+'opinion'}/>)}
        </Layout>
    )
}

export default Opinion

export const query = graphql`
query opinionQuery {
    allWordpressWpOpinion {
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
// const data = [
//     {
//         title:'What is Lorem Ipsum?',
//         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         img:img1,
//         url:'#'
//     },
//     {
//         title:'What is Lorem Ipsum?',
//         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         img:img2,
//         url:'#'
//     },
//     {
//         title:'What is Lorem Ipsum?',
//         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         img:img3,
//         url:'#'
//     },
// ]
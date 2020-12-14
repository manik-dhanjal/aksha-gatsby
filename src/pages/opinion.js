import React from 'react'
import Layout from '../components/layout'
import Head from '../components/atom/template-head'
import img1 from '../assets/images/home/opinion-1.png'
import img2 from '../assets/images/home/opinion-2.png'
import img3 from '../assets/images/home/opinion-3.png'
import Card from '../components/molecule/opinion-temp-card'

const Opinion = () => {
    return (
        <Layout>
            <Head>Opinion</Head>
            {data.map((posts,i)=><Card {...posts} i={i} key={i+'opinion'}/>)}
        </Layout>
    )
}

export default Opinion

const data = [
    {
        title:'What is Lorem Ipsum?',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img:img1,
        url:'#'
    },
    {
        title:'What is Lorem Ipsum?',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img:img2,
        url:'#'
    },
    {
        title:'What is Lorem Ipsum?',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        img:img3,
        url:'#'
    },
]
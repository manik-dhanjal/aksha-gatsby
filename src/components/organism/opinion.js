import React from 'react'
import styled from 'styled-components'
import Head from '../atom/organism-head'
import Card from '../molecule/opinion-card'
import img1 from '../../assets/images/home/opinion-1.png'
import img2 from '../../assets/images/home/opinion-2.png'
import img3 from '../../assets/images/home/opinion-3.png'

const Div =  styled.div`
padding:50px 0;
background:rgb(247,247,247);
.card-cont{
    display:flex;
    justify-content:space-between;
    margin-top:50px;
    gap:100px;
}
@media screen and (max-width:1024px){
    .card-cont{
        gap:50px;
    }
}
@media screen and (max-width:768px){
    .card-cont{
        gap:30px;
        width:min-content;
    }
    .scroll{
        overflow-y:auto;
        scrollbar-width: none; 
    }
}
`
const Opinion = () => {
    return (
        <Div id='opinion'>
            <div className='container'>
                 <Head url='/opinion'>Opinion</Head>
                 <div className='scroll'>
                    <div className='card-cont'>
                            {data.map((posts,i)=><Card {...posts} key={i+'opinion'}/>)}
                    </div>
                 </div>
            </div>
        </Div>
    )
}

export default Opinion

const data = [
    {
        title:'Lorem Ipsum',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
        img:img1,
        url:'#'
    },
    {
        title:'Lorem Ipsum',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
        img:img2,
        url:'#'
    },
    {
        title:'Lorem Ipsum',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s',
        img:img3,
        url:'#'
    },
]
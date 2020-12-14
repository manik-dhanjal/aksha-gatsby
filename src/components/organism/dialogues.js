import React from 'react'
import styled from 'styled-components'
import Head from '../atom/organism-head.js'
import Card from '../molecule/dialogues-card'
import img1 from '../../assets/images/home/dialogues-1.png'
import img2 from '../../assets/images/home/dialogues-2.png'

const Div = styled.div`
padding: 50px 0;
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
        gap:50px;
        flex-direction:column;
    }
}
` 
const Dialogues = () => {
    return (
        <Div id='dialogues'>
            <div className='container'>
                <Head url='#'>Aksha Dialogues</Head>
                <div className='card-cont'>
                     {data.map((posts,i)=><Card {...posts} key={i+'dialogues'}/>)}
                </div>
            </div>
        </Div>
    )
}

export default Dialogues

const data = [
    {
        title:'Lorem Ipsum is simply dummy text',
        img:img1,
        url:'#'
    },
    {
        title:'Lorem Ipsum is simply dummy text',
        img:img2,
        url:'#'
    },
]
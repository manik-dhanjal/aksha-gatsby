import React from 'react'
import styled from 'styled-components'
import Head from '../atom/organism-head.js'
import Card from '../molecule/events-card'
import img1 from '../../assets/images/home/events-1.png'
import img2 from '../../assets/images/home/events-2.png'
import img3 from '../../assets/images/home/events-3.png'

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
        gap:30px;
        width:min-content;
    }
    .scroll{
        overflow-y:auto;
        scrollbar-width: none; 
    }
}
`
const Events = () => {
    return (
        <Div id='events'>
            <div className='container'>
                <Head url='#'>events</Head>
                <div className='scroll'>
                    <div className='card-cont'>
                        {data.map((posts,i)=><Card {...posts} key={i+'events'}/>)}
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Events

const data = [
    {
        title:'Lorem Ipsum',
        img:img2,
        date:'Thu Dec 10 2020 14:49:10 GMT+0530 (India Standard Time)',
        location:'The Oberoi Hotel, New Delhi',
        url:'#'
    },
    {
        title:'Lorem Ipsum',
        img:img3,
        date:'Thu Dec 10 2020 14:49:10 GMT+0530 (India Standard Time)',
        location:'Bikaner House, New Delhi',
        url:'#'
    },
    {
        title:'Lorem Ipsum',
        img:img1,
        date:'',
        location:'',
        url:'#'
    },
]
import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Head from '../atom/organism-head'
import img1 from '../../assets/images/home/stories-1.png'
import img2 from '../../assets/images/home/stories-2.png'
import img3 from '../../assets/images/home/stories-3.png'

const Div = styled.div`
padding:50px 0;
background:rgb(247,247,247);
.body{
    margin-top:50px;
    display:flex;
    gap:100px;
    .main-img{
        width:100%;
    }
    .content{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .other-imgs{
            display:flex;
            width:100%;
            margin-top:30px;
            .img-cont{
                margin-left:25px;
                width:100%;
                &:nth-of-type(1){
                    margin-left:0;
                }
            }
        }
        .next-btn>a{
            display:flex;
            align-items:center;
            color:rgba(242,161,0);
            font-weight:600;
                i{
                    margin-left:10px;
                    font-size:1.2em;
                }
        }
    }
}
@media screen and (max-width:1024px){
    .body{
        gap:50px;
    }
}
@media screen and (max-width:768px){
    .body{
        flex-direction:column-reverse;
        gap:20px;
        margin-top:30px;
        .content{
            p{
                margin:20px 0;
            }
        }
    }
}
`
const Stories = () => {
    return (
        <Div id='stories'>
            <div className='container'>
                <Head url='#'>Stories</Head>
                <div className='body'>
                    <div className='main-img'>
                        <img src={img1} alt='lorem ipsum'/>
                    </div>
                    <div className='content'>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div className='next-btn'><Link to='#'>Next <i className="fas fa-long-arrow-alt-right"></i></Link></div>
                        <div className='other-imgs'>
                            <div className='img-cont'>
                                <img src={img2} alt='lorem ipsum'/>
                            </div>
                            <div className='img-cont'>
                                <img src={img3} alt='lorem ipsum'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Stories

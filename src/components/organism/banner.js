import React from 'react'
import styled from 'styled-components'
import BannerImg from '../../assets/images/home/banner-img.png'
import lineImg from '../../assets/images/home/color-line.png'

const Div = styled.div`
.banner-part1{
    background:url(${lineImg});
    background-position: bottom;
    padding-bottom:150px;
    background-repeat:repeat-x;
    .banner-background{
        background: rgba(242,161,0);
        padding:50px 0;
        &>div{
            display:flex;
        }
        .title{
            width:40%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            h1{
                max-width:700px;
                margin-bottom:20px;
                font-weight:600;
            }
        }
        .banner-img{
            width:60%;
            .img-cont{
                width:85%;
                margin-left:15%;
                margin-bottom:-150px;
            }
        }
    }
}
.banner-part2{
    .description{
        padding:50px 0px;
        max-width:1000px;
        text-align:center;
        margin: 0 auto;
    }
}
@media screen and (max-width:1024px){
    .banner-part1{
        padding-bottom:120px;
         .banner-background>div{
            .title{
                width:50%;
            }
            .banner-img{
                width:50%;
                .img-cont{
                    width:95%;
                    margin-left:5%;
                    margin-bottom:-150px;
                }
            }
        }        
    }
}
@media screen and (max-width:768px){
    .banner-part1{
        padding-bottom:150px;
         .banner-background>div{
             flex-direction:column;
             gap:50px;
            .title{
                width:100%;
                max-width:350px;
                margin:0 auto;
                text-align:Center;
            }
            .banner-img{
                width:100%;
                .img-cont{
                    width:100%;
                    margin-left:0;
                    margin-bottom:-150px;
                    
                }
            }
        }        
    }
}
`
const Banner = () => {
    return (
        <Div>
            <div className='banner-part1'>
                <div className='banner-background'>
                    <div className='container'>
                        <div className='title'>
                            <h1>
                                CONVENING EXPERTISE 
                                CONSTRUCTIVE
                                CONVERSATIONS.
                                EFFECTIVE ACTIONS.
                            </h1>
                            <p>
                                Aksha, a Bill and Melinda Gates Foundation initiative convenes knowledge and 
                                expertise to address India's challenges in healthcare and social development.
                            </p>
                        </div>
                        <div className='banner-img'>
                            <div className='img-cont'>
                                <img src={BannerImg} alt='banner'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-part2 container'>
                <div className='description'>
                      Aksha provides a platform for stakeholders from government, civil society, business, urban local bodies, academia and international foundations, to convene, collaborate and create solutions to India’s toughest challenges in health and social development. Whether it is mapping the reasons behind vaccine hesitancy in vulnerable communities; understanding how advances in data-science can track disease outbreak; or finding ways improve people’s access to health workers, Aksha brings together expertise, research and case studies that can be stitched together to achieve innovative and scalable solutions for millions of people.
                </div>
            </div>
        </Div>
    )
}

export default Banner

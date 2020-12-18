import React from 'react'
import Layout from '../components/layout'
import parse from 'html-react-parser'
import styled from 'styled-components'
import Img from "gatsby-image"
const Div = styled.div`
    .banner>div{
        display:flex;
        background:rgba(242,161,0);
        align-items:center;
        gap:100px;
        padding-top:50px;
        padding-bottom:50px;
        .head{
            width:50%;
            p{
                margin-top:30px;
                font-size:1.15em;
            }
            .published{
                margin-top:20px;
            }
        }
        .image{
            width:50%;
            height:100%;
            &>div{
                height:50vh;
            }
        }
        .reading-time{
            margin-top:10px;
        }
    }
    & .content{
        max-width: 768px;
        margin:0 auto;
        padding:50px 30px ;
        p{
            font-size:1.1em;
            line-height:1.6em;
            margin-top:23px;
            letter-spacing: -0.09px;
            color: rgb(49, 67, 81);
        }
        h2{
            color:black !important;
        }
    }
    @media screen and (max-width:1024px){
        text-align:center;
        .banner>div{
            flex-direction:column;
            gap:30px;
            .head{
                width:100%;
            }
            .image{
                width:100%;
            }
        }
    }
`
const SingleOpinion = ({pageContext}) => {
    const {title,content,acf} = pageContext.data

   
    return (
        <Layout>
            
                <Div>

                    <div className='banner'>
                        <div className='container'>
                            <div className='head'>
                                <h1>{parse(title)}</h1>
                                <p className='description'>{parse(acf.short_description)}</p>
                                <div className='published'>
                                    <strong>First Published:</strong> {acf.publishing_date}, {acf.publisher_name}
                                </div>
        
                            </div>
                            
                            <div className='image'>
                                <Img fluid={acf.banner_image.localFile.childImageSharp.fluid} alt={title}/>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='main-content'>{parse(content)}</div>
                    </div>
                </Div>
        </Layout>
    )
}

export default SingleOpinion

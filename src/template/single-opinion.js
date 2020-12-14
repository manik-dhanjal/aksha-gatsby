import React from 'react'
import Layout from '../components/layout'
import parse from 'html-react-parser'
import styled from 'styled-components'

const Div = styled.div`
    .banner>div{
        display:flex;
        background:rgba(242,161,0);
        height:65vh;
        align-items:center;
        gap:100px;
        .head{
            width:50%;
            p{
                margin-top:30px;
                font-size:1.15em;
            }
        }
        .image{
            width:50%;
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
`
const SingleOpinion = ({pageContext}) => {
    const {title,content,acf} = pageContext.data
    return (
        <Layout>
            
                <Div>

                    <div className='banner'>
                        <div className='container'>
                            <div className='head'>
                                <h1>{title}</h1>
                                <p className='description'>{parse(acf.short_description)}</p>
                            </div>
                            
                            <div className='image'>
                                <img src={acf.banner_image.source_url} alt={title}/>
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

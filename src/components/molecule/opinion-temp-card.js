import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from "gatsby-image"
import parse from 'html-react-parser'
const Div = styled.div`
background:${({i})=> i%2-1?'white':'rgb(247,247,247)'};
.card{
    display:flex;
    flex-direction:${({i}) => i%2?'row':'row-reverse'};
    padding:50px 0;
    gap:100px;
    max-width:1024px;
    margin:0 auto;
    .content{
        width:60%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        h3{
            margin-bottom:20px;
        }
        p{
            margin-bottom:20px;
        }
        .reading-time{
            margin-bottom:30px;
        }
    }
    .image{
        width:40%;
        align-self:center;
        height:calc( (924px * 0.4) * 0.8);
        overflow:hidden;
        &>div{
            width:100%;
            height:100%;
        }
    }
}
.readmore-btn>a{
    display:flex;
    align-items:center;
    color:rgba(242,161,0);
    font-weight:600;
        i{
            margin-left:10px;
            font-size:1.2em;
        }
}
@media screen and (max-width:1024px){
    .card{
        gap:50px;
        .content{
            width:50%;
        }
        .image{
            width:50%;
            height:calc( ( (100vw - 110px) * 0.5) * 0.67);
        }
    }
}
@media screen and (max-width:768px){
    .card{
        flex-direction:column;
        gap:30px;
        .content{
            width:100%;
        }
        .image{
            width:100%;
            height:calc( ( 100vw - 60px ) * 0.67);
        }
    }
}
`
const Card = ({img,title,slug,desc,i,time}) => {
    console.log(slug)
    return (
        <Div i={i}>
            <div className='container'>
                <div className='card'>
                    <div className='image'>
                    <Img fluid={img} alt={title}/>
                    </div>
                    <div className='content'>
                        <h3>{parse(title)}</h3>
                        <p>{desc}</p>
                        <div className='reading-time'>
                                    <i class="far fa-clock"></i> {time}
                        </div>
                        <div className='readmore-btn'><Link to={slug}>READ MORE <i className="fas fa-long-arrow-alt-right"></i></Link></div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Card

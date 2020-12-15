import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from "gatsby-image"
const Div =  styled.div`
width:100%;
.img-cont{
    width:100%;
    margin-bottom:20px;
    height:calc( ( ( 100vw - 300px) / 3 ) * 0.7 );
    background:black;
    min-height:190px;
    overflow:hidden;
    postion:relative;
    &>div{
        width:100%;
        height:100%;
    }
}
.title{
    margin-bottom:10px;
}
.description{
    margin-bottom:10px;
    line-height:1.5em;
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
@media screen and (max-width:768px){
    min-width:280px;
}
`
const Card = ({img,title,desc,slug}) => {
    return (
        <Div >
            <div className='img-cont'>
                <Img fluid={img} alt={title}/>
            </div>
            <h3 className='title'>
                {title}
            </h3>
            <p className='description'>
                {desc}
            </p>
            <div className='readmore-btn'><Link to={"opinion/"+slug}>READ MORE <i className="fas fa-long-arrow-alt-right"></i></Link></div>
        </Div>
    )
}

export default Card

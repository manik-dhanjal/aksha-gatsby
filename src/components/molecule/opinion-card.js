import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Div =  styled.div`
width:100%;
.img-cont{
    width:100%;
    margin-bottom:20px;
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
const Card = ({img,title,desc,url}) => {
    return (
        <Div>
            <div className='img-cont'>
                <img src={img} alt={title}/>
            </div>
            <h3 className='title'>
                {title}
            </h3>
            <p className='description'>
                {desc}
            </p>
            <div className='readmore-btn'><Link to={url}>READ MORE <i className="fas fa-long-arrow-alt-right"></i></Link></div>
        </Div>
    )
}

export default Card

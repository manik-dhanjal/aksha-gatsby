import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Div = styled.div`
width:100%;
.img-cont{
    width:100%;
    margin-bottom:20px;
}
.title{
    margin-bottom:15px;
}
.description{
    margin-bottom:10px;
    min-height:55px;
    .location{
        margin-bottom:10px;
    }
    i{
        font-size:1.05em;
    }
    span{
        padding-left:10px;
        color:#aaa;
        font-size:0.95em;
    }
}
.view-btn>a{
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
const EventsCard = ({img,title,url,location,date}) => {
    const customDate = date?new Date(date):null
    return (
        <Div>
            <div className='img-cont'>
                <img src={img} alt={title}/>
            </div>
            <h3 className='title'>
                {title}
            </h3>
            <div className='description'>
                {location?
                    <div className='location'>
                        <i className="fas fa-map-marker"></i> <span>{location}</span>
                    </div>
                    :null
                }
                {customDate?
                    <div className='date'>
                        <i className="far fa-calendar-alt"></i> <span>{customDate.getDate()}/{customDate.getMonth()}/{customDate.getFullYear()}</span>
                    </div>
                    :null
                }
            </div>
            <div className='view-btn'><Link to={url}>View <i className="fas fa-long-arrow-alt-right"></i></Link></div>
        </Div>
    )
}

export default EventsCard

import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
padding:50px;
.follow-icons{
    border-top:1px solid rgba(242,161,0);
    padding:25px 0;
    display:flex;
    justify-content:center;
    &>a{
        font-size:60px;
        margin:0 25px;
        color:black;
    }
}
.follow-text{
    text-align:center;
    font-size:1.2em;
}
@media screen and (max-width:768px){
    .follow-icons>a{
        font-size:45px;
        margin:0 15px;
        color:black;
    }
}
`
const FollowUs = () => {
    return (
        <Div className='container'>
            <div className='follow-icons'>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(window.location.href)}`} target="_blank" rel="noreferrer" className='facebook'>
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(window.location.href)}&title=Aksha%20Foundation&summary=Aksha,%20a%20Bill%20and%20Melinda%20Gates%20Foundation%20initiative%20convenes%20knowledge&source=LinkedIn`} rel="noreferrer" className='linked-in'>
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURI(window.location.href)}`} target="_blank" rel="noreferrer" className='twitter'>
                    <i className="fab fa-twitter-square"></i>
                </a>
            </div>
            <p className='follow-text'>Follow us on Social Media</p>
        </Div>
    )
}

export default FollowUs

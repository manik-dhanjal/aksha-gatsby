import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Div = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding-bottom:10px;
border-bottom:1px solid rgba(242,161,0);
h2{
    text-transform:uppercase;
}
.viewall-btn{
a{
    color:rgba(242,161,0);
    text-decoration:none;
    i{
        margin-left:5px;
    }
}
}
`
const Head = ({children,url}) => {
    return (
        <Div>
            <h2>{children}</h2>
            <span className='viewall-btn'><Link to={url}>View All <i className="fas fa-angle-double-right"></i></Link></span>
        </Div>
    )
}

export default Head

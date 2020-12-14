import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
margin-top:50px;
h1{
    display:inline;
    position:relative;
    padding-bottom:5px;
    &::after{
        content:'';
        position:absolute;
        left:0;
        right:0;
        bottom:-3px;
        background:rgb(242,161,0);
        border-radius:5px;
        width:100%;
        padding:2px;
        z-index:2;
    }
}
hr{
    margin-top:5px;
}
`
const Head = ({children}) => {
    return (
        <Div>
            <div className='container'>
                <h1>{children}</h1>
                <hr/>
            </div>
        </Div>
    )
}

export default Head

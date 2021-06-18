import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/white-logo.png'
import {Link} from 'gatsby'

const SFooter = styled.footer`
background:rgb(27,27,27);
.footer{
    display:grid;
    grid-template-columns:30% 40% 30%;
    
    &>*{
        padding:30px 0;
    }
    .logo{
        width:150px;  
        justify-self:end;
        margin-right:50px;
        align-self:center;
    }
    .qoute{
        color:white;
        border:1px solid white;
        text-align:center;
        border-top:none;
        font-size:12px;
        font-weight:600;
        line-height:2em;
        .qoute-d{
            max-width:250px;
            margin:0 auto;
        }
        &>div{
            margin-top:15px;
        }
    }
    .footer-links{
        list-style-type:none;
        padding-left:40px;
        align-self:center;
        li{
            margin-bottom:10px;
            &:nth-of-type(3){
                margin-bottom:0;
            }
        }
        a{
            font-size:0.9em;
            color:white;
            text-decoration:underline;
        }
    }
}
.copyright{
    text-align:center;
    color:#eee;
    font-size:0.7em;
    padding:20px 0;

}
@media screen and (max-width:768px){
    .footer{
        display:grid;
        grid-template-columns:100%;
        grid-template-row:35% 40% 35%;
        .qoute{
            border:1px solid white;
            .qoute-d{
                max-width:300px;
                margin:0 auto;
            }
        }
        .logo{
            width:150px;  
            justify-self:center;
            margin:0;
        }    
        .footer-links{
            padding-left:0;
            justify-self:center;
            text-align:Center;
        }
    }
}
`
const Footer = () => {
    return (
        <SFooter>
            <div className='container'>
                <div className='footer'>
                    <Link className='logo' to='/'>
                        <img src={Logo} alt='aksha logo'/>
                    </Link>
                    <div className='qoute'>
                        <div className='qoute-d'>
                        "I BELIEVE THAT EVERY LIFE IS VALUABLE.
                         THAT WE CAN MAKE THINGS BETTER.
                         THAT INNOVATION IS THE KEY TO A BRIGHT FUTURE.
                         THAT WE'RE JUST GETTING STARTED."
                        </div>

                         <div className='name'>- BILL GATES</div>
                    </div>
                    <ul className='footer-links'>
                        <li><Link to='#'>Be Aware of Frauduient Activity</Link></li>
                        <li><Link to='#'>Privacy & Cookies</Link></li>
                        <li><Link to='#'>Terms of Use</Link></li>
                    </ul>
                </div>
                <div className='copyright'>
                    ©1999-2020 Bill & Melinda Gates Foundation. All Rights reserved.
                </div>
            </div>
        </SFooter>
    )
}

export default Footer

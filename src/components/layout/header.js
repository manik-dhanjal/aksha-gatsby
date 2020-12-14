import React,{useState} from 'react'
import styled from 'styled-components'
import  Logo from '../../assets/images/logo.svg'
import {Link} from 'gatsby'
const SHeader = styled.header`
nav{
    background:white;
}
nav>div{
    height:110px;
    display:flex;
    align-items:center;
    position:relative;
    .logo{
        width:140px;
        display:block;
        img{
            max-height:100%;
        }
    }
    .responsive-menu{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .nav-menu{
        list-style-type:none;
        display:flex;
        margin-left:30px;
        li{
            margin-left:20px;
            a{
                text-decoration:none;
                color:#333;
                font-size:1.2em;
            }
        }
    }
    .search-menu{
        list-style-type:none;
        display:flex;
        align-items:center;
        .search{
            border-bottom:1px solid black;
            input{
                padding:5px 10px;
                border:none;
                width:140px;
                font-size:1.05em;
            }
            button{
                padding:8px;
                padding-right:12px;
                padding-bottom:0px;
                border:none;
                background:transparent;
                font-size:1.1em;
                cursor:pointer;
            }
        }
        .bookmark{
            font-size:1.1em;
            margin-left:20px;
            margin-top:5px;
        }
    }
    .burger-menu{
        display:none;
        justify-self:end;
        width:56px;
        height:40px;
        padding:9px 14px;
        flex-direction:column;
        border:1px solid #eee;
        justify-content:space-between;
        background:white;
        border-radius:4px;
        cursor:pointer;
        div{
            border-bottom:2px solid #888;
        }
    }
    @media screen and (max-width:1024px){
        width:100%;
        justify-content:space-between;
        .burger-menu{
            display:flex;
        }
        .responsive-menu{
            position:absolute;
            background:white;
            width:100%;
            top:100%;
            left:0;
            right:0;
            flex-direction:column;
            align-items:center;
            overflow:hidden;
            transition:0.5s ease-in-out;
            max-height:${({menu})=>menu};
            .search-menu,.nav-menu{
                flex-direction:column;
                align-items:center;
                margin:0;
                padding:0;
                li{
                    margin:10px 0;
                }
            }
        }
    }
}
`
const Header = () => {
    const [navMenu,setNavMenu] = useState(false)
    const [search,setSearch] = useState('')
    return (
        <SHeader menu={navMenu?'400px':'0'}>
            <nav >
                <div className='container'>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='aksha-logo'/>
                    </Link>
                    <div className='responsive-menu'>
                        <ul className='nav-menu'>
                            <li className='item'><a href='/#opinion'  onClick={()=>setNavMenu(false)}>Opinion</a></li>
                            <li className='item'><a href='/#events' onClick={()=>setNavMenu(false)}>Events</a></li>
                            <li className='item'><a href='/#stories' onClick={()=>setNavMenu(false)}>Stories</a></li>
                            <li className='item'><a href='/#dialogues' onClick={()=>setNavMenu(false)}>Dialogues</a></li>
                        </ul>
                        <ul className='search-menu'>
                            <li className='search'>
                                <input type='text' className='text-box' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                                <button className='submit'><i className="fas fa-search"></i></button>
                            </li>
                            <li className='bookmark'>
                                <i className="fas fa-bookmark"></i>
                            </li>
                        </ul>
                    </div>
                    <button className='burger-menu' onClick={()=>setNavMenu(!navMenu)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </nav>
        </SHeader>
    )
}

export default Header

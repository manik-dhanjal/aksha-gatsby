import React from 'react'
import { Helmet } from "react-helmet"
import Footer from './footer'
import Header from './header'
import logo from '../../assets/images/logo.png'
import favicon from '../../assets/images/favicon.png'
import "../../assets/css/index.css"
import '../../assets/fonts/Lato-Bold.ttf'	
import '../../assets/fonts/Lato-Regular.ttf'
import '../../assets/fonts/Lato-Light.ttf'
const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <link rel="icon" href={favicon} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content="landing page for aksha foundation"
                />
                <meta property="og:url"                content="https://aksha.com" />
                <meta property="og:type"               content="Landing page" />
                <meta property="og:title"              content="Aksha Foundation" />
                <meta property="og:description"        content="The Aksha platform, a Bill & Melinda Gates Foundation initiative, convenes knowledge and expertise to address India’s challenges in healthcare anvd social development" />
                <meta property="og:image"              content={logo} />
                <meta name="twitter:title" content="Aksha Foundation"/>
                <meta name="twitter:description" content="The Aksha platform, a Bill & Melinda Gates Foundation initiative, convenes knowledge and expertise to address India’s challenges in healthcare anvd social development"/>
                <meta name="twitter:image" content={logo}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link rel="apple-touch-icon" href={logo} />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <title>Aksha - Landing Page</title>
            </Helmet>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export default Layout

import React from 'react'
import Footer from './footer'
import Header from './header'
import "../../assets/css/index.css"
import '../../assets/fonts/Lato-Bold.ttf'	
import '../../assets/fonts/Lato-Regular.ttf'
import '../../assets/fonts/Lato-Light.ttf'
const Layout = ({children}) => {
    return (
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export default Layout

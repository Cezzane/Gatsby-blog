import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/Index.scss'
import layoutStyle from './layout.module.scss'
const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Navbar/>
                {props.children}
            </div>
            
            <Footer/>
        </div>
    )
}
export default Layout;
import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import navbarStyles from './navbar.module.scss'
 const Navbar = () => {
     const data=useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
     `)
    return (
        <div className={navbarStyles.header}>
            <h2><Link to='/' className={navbarStyles.title}>{data.site.siteMetadata.title}</Link></h2>
            <ul className={navbarStyles.navList}>
                <li><Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/'>Home</Link></li>
                <li><Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/blog'>Blog</Link></li>
                <li><Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/services'>Services</Link></li>
                <li><Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/contact'>Contact</Link></li>

            </ul>
        </div>
    )
}

export default Navbar;
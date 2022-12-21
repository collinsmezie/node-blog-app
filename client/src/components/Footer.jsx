import React from 'react'
import logo from "../images/blog.png";


const Footer = () => {

    return(
        <footer> 
					<img src={logo} alt="logo"/>
					<span>
						Made with <b>React.Js</b>
					</span>
        </footer>
    )
}

export default Footer
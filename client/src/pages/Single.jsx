import React from 'react'
import jumpy from "../images/jumpy.gif";
import { Link } from 'react-router-dom';


const Single = () => {

    return(
        <div className='single'>
					<div className="content">
						<img src={jumpy} alt="single post image" />
					</div>
					<div className="menu">single psos</div>
				</div>
    )
}

export default Single
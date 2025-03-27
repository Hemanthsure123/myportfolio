import './index.css'
import { Link,Outlet } from 'react-router';
import React from 'react';
import {Component} from "react"
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";


class WatchApps extends Component{

    

    render(){
        return(
            <div className='social-media-container' >
                <Link to="/" ><button className="back-arrow"><IoMdArrowRoundBack/></button></Link>
                <div className='social-media-projects-display' >
                    <div className='social-media-project-1' >
                        <a href="//" className='go-link' ><FaGithub className='view-icon' /></a>
                        <a href="//" className='go-link' ><FaChrome className='view-icon' /></a> 
                        <a href="//" className='go-link' ><MdOutlineDescription className='view-icon' /></a> 
                    </div>
                    <div className='social-media-project-2' >
                        <a href="//" className='go-link' ><FaGithub className='view-icon' /></a>
                        <a href="//" className='go-link' ><FaChrome className='view-icon' /></a> 
                        <a href="//" className='go-link' ><MdOutlineDescription className='view-icon' /></a> 
                    </div>
                    <div className='social-media-project-3' >
                        <a href="//" className='go-link' ><FaGithub className='view-icon' /></a>
                        <a href="//" className='go-link' ><FaChrome className='view-icon' /></a> 
                        <a href="//" className='go-link' ><MdOutlineDescription className='view-icon' /></a> 
                    </div>
                    <div className='social-media-project-4' >
                        <a href="//" className='go-link' ><FaGithub className='view-icon' /></a>
                        <a href="//" className='go-link' ><FaChrome className='view-icon' /></a> 
                        <a href="//" className='go-link' ><MdOutlineDescription className='view-icon' /></a> 
                    </div>
                </div>
                <Outlet/>
            </div>
        )
    }
}

export default WatchApps
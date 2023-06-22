import React from 'react'
import logo from "../Asserts/Logo1 (2) 1.png"
import "./Nav.css"
import NavArray from './NavArray'
import { BoxArrowLeft } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <>
    <div className="nav_bar">
        <div className="logo">
            <div className="img"><img src={logo} alt="logo" /></div>
            <p className='logotext' >Bohdie </p>
        </div>
        <small> Manage</small>
        <div className="nav"> 
        <ul>
          {
            NavArray.map((items)=>{
              return(
                <>
                <li>
             
                    <NavLink activeClassName="active" className='Nav_links' to={items.to}> <span> {items.icon}</span> <span className='nav_space'  >{items.name}</span> </NavLink>
    
                </li>
                
                </>
              )
            })
          }
        </ul>
        
        
         </div>
         <div className="login">
          <NavLink to="sdfs"><span> <BoxArrowLeft/> </span> <span className='nav_space' >Logout</span>   </NavLink>
         </div>
    </div>
    
    </>
  )
}

export default Nav
 import React from 'react';
import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import "./style.moduls.css"

import  {NavLink} from 'react-router-dom';
const Sidebar =()=>{

    const {showMenu , setshowMenu} = useContext(MainContext);

    return(
        <div className="sidebar_section"  style={showMenu ? {right:0} : {}} >
            <ul className="sidebar_list ">
                <li className="sidebar_avatar">
                    <img src="./images/avatar.jpeg" alt="" />
                </li>
                <li><NavLink style={({isActive})=>{ return isActive ? {color : "grey"} :{}  }} to='/user'>کاربران</NavLink></li>
                <li><NavLink style={({isActive})=>{ return isActive ? {color : "grey"} :{}  }} to='/gallery'>گالری</NavLink></li>
                <li><NavLink style={({isActive})=>{ return isActive ? {color : "grey"} :{}  }} to='/posts'>پست ها</NavLink></li>
                <li><NavLink style={({isActive})=>{ return isActive ? {color : "grey"} :{}  }} to='/todoes'>کارها</NavLink></li>
            </ul>
        </div>
    )
}



export default Sidebar ;
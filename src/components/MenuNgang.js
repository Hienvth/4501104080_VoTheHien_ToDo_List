import React from "react";
import {Link} from 'react-router-dom';
import { routes } from "../config/routes";
import '../css/style.css';
export const MenuNgang =()=>{
    return(
        <div className="con1">
            {
                routes.map((item) => (
                    <Link to={item.path}  className="menuItem"><a>{item.label}</a></Link>
                ))
            }
        </div>
    )
}
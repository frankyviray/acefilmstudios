import React from 'react'
import { useState } from 'react'
import Release from '../Release/Release';
import './ReleaseSubMenu.css'

function ReleaseSubMenu() {
   

    return (
        <div>
            <ul class="sub-menu">
                <li className="menu-item-advertising" onClick={ ()=> console.log("show release")}><a>Advertising</a></li>
                <li className="menu-item-Series"><a>Series</a></li>
                <li className="menu-item-Movies"><a>Movies</a></li>
                <li className="menu-item-all"><a>Show All</a></li>	
            </ul>
        </div>
    )
}

export default ReleaseSubMenu

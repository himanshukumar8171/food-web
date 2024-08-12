/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/frontend_assets/assets.js";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your <div>cravings and elevate yuor dining exprience, one delicious meal at a time</div></p>
<div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
        )
    })}
</div>
<  hr />

      
    </div>
  )
}

export default ExploreMenu

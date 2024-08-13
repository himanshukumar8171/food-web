/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {food_list} from '../assets/frontend_assets/assets'
 export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem,setCartItem]= useState({});
    const addToCart = (itemId)=>{

        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
   const removeFromCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart
        
    };
    useEffect(()=>{
        console.log(cartItem)
    },[cartItem])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;


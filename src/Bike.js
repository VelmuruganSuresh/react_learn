import React from 'react';
import BikeCart from './BikeCart.jsx';
import { useState } from 'react';
export default function Bike(){
  const [cartItems, setCartItems] = useState(false);
  const showBike = ()=>{
    setCartItems(true);
    
  }
  return (
    <div>
      {
        !cartItems?(
          <table>
            <tr><td>
              <img src="https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?" alt="photo" width="150px" height="150px" onClick={showBike}/>  
              </td></tr>
              <tr><td>Fruits</td></tr>
          </table>):
          (<BikeCart/>)
      }
      
    </div>
  );
}

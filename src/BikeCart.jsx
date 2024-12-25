import React from 'react'
function Rx(){
  return(
    <div>
      <table>
        <tr><td>
          <img src="https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg" alt="photo" width="150px" height="150px" />
          </td></tr>
          <tr><td>Royal Enfield</td></tr>
          <tr><td>1997</td></tr>
      </table>
    </div>
  )
}
function Re(){
  return(
    <div>
      <table>
        <tr><td>
          <img src="https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg" alt="photo" width="150px" height="150px" />
          </td></tr>
          <tr><td>Royal Enfield</td></tr>
          <tr><td>1997</td></tr>
      </table>
    </div>
  )
}
function Xl(){
  return(
    <div>
      <table>
        <tr><td>
          <img src="https://images.pexels.com/photos/681795/pexels-photo-681795.jpeg" alt="photo" width="150px" height="150px" />
          </td></tr>
          <tr><td>Royal Enfield</td></tr>
          <tr><td>1997</td></tr>
      </table>
    </div>
  )
}

export default function BikeCart(){
  return(
    <div className='bike-container'>
      <Rx/>
      <Re/>
      <Xl/>

    </div>
  )
}
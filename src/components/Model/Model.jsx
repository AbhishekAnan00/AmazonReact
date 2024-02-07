import React from 'react'
import './Model.css'

export const Model = ( {name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow}) =>
{  
  return (
    <div className="model">
      <div className="model-preview">
      <div className="model-name">
        <p>Enter Full Name</p>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className='model-input'
        />
      </div>
      <div className="model-address">
        <p>Enter Full Address</p>
        <input type="text"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        className='model-input'
        /></div>
      <div className="model-pincode">
      <p>Enter Pincode</p>
        <input type="text"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className='model-input'
        />
      </div>
      <div className="model-mobile-no">
      <p>Enter Mobile no</p>
        <input type="text" 
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        className='model-input'
        />
      </div>
      <div className="model-order-btn" onClick={()=> {buyNow()}}>Order Now</div>
    </div>
    </div>
  )
}

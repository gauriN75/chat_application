import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ChatX</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14341494/pexels-photo-14341494.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
          <img src="https://images.pexels.com/photos/14341494/pexels-photo-14341494.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
          <span>Just now</span>
      </div>
      <div className="messageContent">
            <p>Hello</p>
            <img src="https://images.pexels.com/photos/14341494/pexels-photo-14341494.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
      </div>
    </div>
  )
}

export default Message

import React from 'react'

const ProfileComponent = () => {
    const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className='userprofile'>
       <div >User Credentials </div> 
       <p>Welcome {user.name}</p>
       <p>Registered-email : {user.email}</p>
        
        
        </div>
  )
}

export default ProfileComponent
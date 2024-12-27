/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import userContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(userContext);
    if(!user) return <div>Please Login</div>
  return (
    <div>
        <h1>Logged in</h1>
      <h2>welcome {user.username}</h2>

    </div>
  )
}

export default Profile

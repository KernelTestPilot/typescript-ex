import React from 'react'
import { PersonInfo } from '../../Types/User'

interface UserProps{
    user: PersonInfo
}

export default function User({user}: UserProps): JSX.Element {
  return (
  <div className='list-wrapper'> 
    <ul className="list">
      <li className="list-item">
      <div className="list-item-content">
        <h4>{user.username} </h4> 

     <p>{user.role} </p>
   
     </div></li>
    </ul>
  </div>
  )
}

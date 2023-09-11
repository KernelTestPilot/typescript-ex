import React from 'react'
import { PersonInfo } from '../../Types/User'
import { firstToUpperCase } from '../../Utils/firstToUpperCase'

/*
  User story 1:3 & 1:4, Component 2/2
  Description: Renders a single user for the admin page
*/

interface UserProps{
    user: PersonInfo
}

export default function User({user}: UserProps): JSX.Element {
  return (
      <li className="list-item">
        <h4>{firstToUpperCase(user.username)} </h4> 
        <p>Role: {firstToUpperCase(user.role.toLowerCase())} </p>
        <p>Email: {user.email} </p>
        <p>Phone: {user.phone} </p>
     </li>
  )
}

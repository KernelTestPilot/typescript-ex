import React from 'react'
import { PersonInfo } from '../Types/User'

interface UserProps{
    user: PersonInfo
}

export default function User({user}: UserProps): JSX.Element {
  return (
    <div><p>{user.username}</p><span>{user.role}</span></div>
  )
}

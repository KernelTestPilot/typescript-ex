import React, { useState, useEffect } from 'react'
import { PersonInfo } from '../Types/User';
import fetchHelper from '../Utils/fetchHelper';
import User from './User';

export default function Users(): JSX.Element {
    const [users, setUsers] = useState<PersonInfo[]>([]);

    function getUserElement(user: PersonInfo): JSX.Element {
        return <User user={user}/>
    }

    useEffect(() => {
        fetchHelper("/admin/users", "GET").then(result => {
            result.json().then(fetchedUsers => {
                setUsers(fetchedUsers);
            })
        });
    }, [setUsers]);

  return (
    <div>
        <h1>Users</h1>
        <div className='user-container'>
            {users.map(getUserElement)}
        </div>
    </div>
  )
}

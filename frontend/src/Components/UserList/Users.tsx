import React, { useState, useEffect } from 'react'
import { PersonInfo } from '../../Types/User';
import fetchHelper from '../../Utils/fetchHelper';
import UserList from './UserList';

export default function Users(): JSX.Element {
    const [users, setUsers] = useState<PersonInfo[]>([]);

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
        {users.map((user, index) => (
          <div key={index}>
            <UserList user={user}/>
          </div>
        ))}
        </div>
    </div>
  )
}

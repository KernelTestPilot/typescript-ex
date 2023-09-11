import React, { useState, useEffect } from 'react'
import { PersonInfo } from '../../Types/User';
import fetchHelper from '../../Utils/fetchHelper';
import User from './User';

/*
  User story 1:3 & 1:4, Component 1/2
  Description: Renders all users for the admin page
*/

export default function UserList(): JSX.Element {
    const [users, setUsers] = useState<PersonInfo[]>([]);

    function getUser(user: PersonInfo, index: number): JSX.Element {
      return (<div key={index}>
            <User user={user}/>
          </div>);
    }

    async function fetchAndSetUsers(): Promise<void> {
      fetchHelper("/admin/users", "GET").then((result: Response) => {
        result.json().then((fetchedUsers: PersonInfo[]) => {
            setUsers(fetchedUsers);
        })
      });
    }

    useEffect((): void => {
        fetchAndSetUsers();
    }, []);


  return (
    <div>
        <h1>Users</h1>
        <div className='user-container'>
          <div className='list-wrapper'>
              <ul className="list">
                {users.map(getUser)}
              </ul>
          </div>
        </div>
    </div>
  )
}

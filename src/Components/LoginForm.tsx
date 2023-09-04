import React, {FormEvent, useState} from 'react';

function LoginForm(): JSX.Element {

    const [formName, setFormName] = useState<string>("")
    const [formPass, setFormPass] = useState<string>("")

    // const checkUser = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     db.forEach(user => {
    //         if (formName === db.username && formPass === db.password){
    //             localStorage.setItem('username' db.username)
    //             localStorage.setItem('role', db.role)
    //         }
    //     })
    // }

  return (
    <>
        {/* <form onSubmit={checkUser}> */}
        <form>
            <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} />
            <input type="text" value={formPass} onChange={(e) => setFormPass(e.target.value)} />
            <button type='submit'>Logga in</button>
        </form>
    </>
  )
}

export default LoginForm
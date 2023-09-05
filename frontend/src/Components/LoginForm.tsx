import React from 'react';

interface LoginFormProps {
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}

function LoginForm({handleFormChange, handleLogin}: LoginFormProps): JSX.Element {

  return (
    <>
        <form>
              <input className="" 
                id="username"
                name="username" 
                type="text" 
                placeholder="Username..."
                onChange={handleFormChange}
                />
             <input className="" 
                id="password" 
                type="password"
                name="password"  
                placeholder="Lösenord..."
                onChange={handleFormChange}
                />
            <button type='submit'
            onClick={(e) =>{ e.preventDefault();
               handleLogin()}}
            >Logga in</button>
        </form>
    </>
  )
}

export default LoginForm
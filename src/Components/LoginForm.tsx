import React, {FormEvent, useState} from 'react';

interface LoginFormProps {
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleFormChange,
  handleLogin,
}) => {

  return (
    <>
        <form>
        <input className="" 
                id="username"
                name="username" 
                type="text" 
                placeholder="Username"
                onChange={handleFormChange}
                />
             <input className="" 
                id="password" 
                type="password"
                name="password"  
                placeholder="******************"
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
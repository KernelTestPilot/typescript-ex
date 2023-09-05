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
    <div className='login'>
        <form>
          <label> <p> Username</p></label>
        <input className="login-input" 
                id="username"
                name="username" 
                type="text" 
                placeholder="Username..."
                onChange={handleFormChange}
                />
                <label> <p> Password</p></label>
             <input className="login-input" 
                id="password" 
                type="password"
                name="password"  
                placeholder="Lösenord..."
                onChange={handleFormChange}
                />
            <button className="login-button" type='submit'
            onClick={(e) =>{ e.preventDefault();
               handleLogin()}}
            >Logga in</button>
        </form>
   </div>
  )
}

export default LoginForm
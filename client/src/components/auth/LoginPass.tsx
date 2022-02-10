import React, { useState } from 'react';
import { InputChange } from '../../utils/TypeScript';

const LoginPass = () => {
  const initialState = {account: '', password: ''}
  const [userLogin, setUserLogin] = useState(initialState)
  const { account, password } = userLogin

  const [typePass, setTypePass] = useState(false)

  const handleChangeInput = (e: InputChange) => {
    const {value, name} = e.target
    setUserLogin({...userLogin, [name]: value})
  }

  return (
    <form>

      <div className="form-group">
        <label htmlFor="account">Email / Phone number</label>
        <input type="text" className="form-control" id="account"
        name="account" value={account} onChange={handleChangeInput}/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>

        <div className="pass">
            <input type={typePass ? "text" : "password"} 
            className="form-control" 
            id="password"
            name="password" value={password} 
            onChange={handleChangeInput}/>
          <small onClick={() => setTypePass(!typePass)}>
            {typePass ? 'Hide' : 'Show'}
          </small>
        </div>

      </div>

    </form>
  );
};

export default LoginPass;


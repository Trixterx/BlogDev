import React, { useState } from 'react';

const LoginSMS = () => {
    const [phone, setPhone] = useState('')
  return (
  <form>
      <div className="form_group">
          <label htmlFor="phone" className="form-label">Phone number</label>
          <input type="text" className='form-control' id="phone" value={phone} onChange={e => setPhone(e.target.value)}></input>
      </div>
  </form>
  );
};

export default LoginSMS;

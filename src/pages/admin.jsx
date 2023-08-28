import {React, useState} from 'react';
import login from '../api/firebase_actions';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email,password)
  }

  return (
    <div>                                            
      <p> FocusApp </p>                                            
      <form>                                              
          <div>
              <label htmlFor="email-address">
                  Email address
              </label>
              <input
                  id="email-address"
                  name="email"
                  type="email"                                    
                  required                                                                                
                  placeholder="Email address"
                  onChange={(e)=>setEmail(e.target.value)}
              />
          </div>

          <div>
              <label htmlFor="password">
                  Password
              </label>
              <input
                  id="password"
                  name="password"
                  type="password"                                    
                  required                                                                                
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
              />
          </div>
                              
          <div>
              <button                                    
                  onClick={handleLogin}>      
                  Login                                                                  
              </button>
          </div>                               
      </form>              
  </div>
  )
}

export default Admin;
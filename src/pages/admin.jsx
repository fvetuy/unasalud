import React, { useState, useEffect } from 'react';
import { login, checkUserLoggedIn, validateUserAdminToken, logout } from '../api/firebase_actions';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const checkLoggedInUser = async () => {
      try {
        setIsLoading(true);

        const loggedInUser = await checkUserLoggedIn();
        setUser(loggedInUser);

        if (loggedInUser) {
          setIsAdmin(validateUserAdminToken(loggedInUser));
        }

        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    checkLoggedInUser();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const success = await login(email, password);

      if (success) {
        const loggedInUser = await checkUserLoggedIn();
        setUser(loggedInUser);

        if (loggedInUser) {
          setIsAdmin(validateUserAdminToken(loggedInUser));
        }
        setIsLoading(false);
      } else {
        setError('Login failed. Please check your credentials.');
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAdminUI = () => {
    if (isAdmin) {
      return (
        <div>
          <p>Welcome, Admin!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    }

    return (
      <div>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}>
            <div className="form-group">
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                {showPassword ? "🕶️" : "👓"}
              </span>
            </div>

            <div className="form-group">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };

  return (
    <div>
      {error && <p className="error-text">{error}</p>}
      {user && isAdmin ? (
        <div>
          <p>Welcome, Admin!</p>
          {handleAdminUI()}
        </div>
      ) : user ? (
        <div>
          <p>Welcome, {user.displayName || 'Admin'}!</p>
          {handleAdminUI()}
        </div>
      ) : (
        <div>
          <p>Please log in to access the admin page.</p>
          {handleAdminUI()}
        </div>
      )}
    </div>
  );
};

export default Admin;

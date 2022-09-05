import React, { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './Logout';

function Login(){
        const {
            isAuthenticated,
            user,
            loginWithRedirect,
            logout,
          } = useAuth0();
        
            if (isAuthenticated) {
                return (
                  <div>
                    Hello {user.name}{' '}
                   {LogoutButton}
                  </div>
                );
              } else {
                return <button onClick={loginWithRedirect}>Log in</button>;
              }
        
    }
export default Login
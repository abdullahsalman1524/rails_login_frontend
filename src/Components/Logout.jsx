import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const goToLoginPage = async () => {
    try {
      const res = await fetch('http://localhost:3001/logout', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      console.log('logout button pressed', res);
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    goToLoginPage();
  }, []); // Empty dependency array to run only once when component mounts

  return <div>Logout</div>;
};

export default Logout;

import React, { useState } from 'react';

function Login() {
    const [token, setToken] = useState(sessionStorage.getItem('token') || "");
  
    const handleLogin = async () => {
// Example of fetching a token from an API endpoint
      try {
        const response = await fetch('http://localhost:5000/authentication-swagger/v1/Token', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: "tim@gmail.com",
            password: "123"
          })
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const content = await response.json();
        // setToken(content);
        sessionStorage.setItem('token', content);
        console.log(sessionStorage.getItem('token'))
        setToken(sessionStorage.getItem('token'))
      } catch (error) {
        console.error("Error fetching the token", error);
      }
    };
  

// render token
    return (
      <div>
        <button onClick={handleLogin}>Login and Store Token</button>
        {token && <div>Token: {token}</div>}
      </div>
    );
  }

export default Login;


// Fetch owned courses with jwt token
// const fetchOwnedCourses = async () => {
//     const [ownedCourses, setCourses] = useState([]);
//     const storedToken = "Bearer " + sessionStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:5000/authentication-swagger/v1/owned-courses', {
//         method: 'GET',
//         headers: {
//           'accept': 'application/json',
//           'Authorization': storedToken
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error('Unable to fetch owned courses');
//       }

//       const content = await response.json();
//       setCourses(data);
//     } catch (error) {
//       console.error("Error fetching owned courses", error);
//     }
//   };



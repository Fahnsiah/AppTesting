import http from 'k6/http';
import { check } from 'k6';

export default function () {
  // Step 1: Authenticate existing user to get token
  const authResponse = http.post('https://noroffapi.pythonanywhere.com/login/', {
    username: 'admin',
    password: 'admin',
  });

  // Validate authentication response
  check(authResponse, {
    'User authentication successful': (r) => r.status === 200,
  });

  // Step 2: Create a new user
  const username = 'user' + Math.random().toString(36).substring(7);
  const email = username + '@noroff.no'
  const first_name = 'F' + username
  const last_name = 'L' + username
  const password = 'password123';
  const is_superuser = false

  const userPayload = {
    username: username,
    email: email,
    first_name: first_name,
    last_name: last_name,
    password:password,
    is_superuser: is_superuser

  };
  
  const token = `Bearer ${authResponse.json().access}`
  var params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  };
  
  const response = http.post('https://noroffapi.pythonanywhere.com/user/', JSON.stringify(userPayload), params);

  // Validate response
  if (response.status === 200) {
    console.log(`User ${username} registered successfully.`);
  } else {
    console.error(`Registration failed. Status code: ${response.status}`);
  }

  //Step: 3 Authenticate the created login
  const payload = {
    username: username,
    password: password,
  };

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resp = http.post('https://noroffapi.pythonanywhere.com/login/', JSON.stringify(payload), params);

  // Validate response
  if (resp.status === 200) {
    console.log(`User ${username} logged in successfully.`);
  } else {
    console.error(`Login failed. Status code: ${resp.status}`);
  }
  
  
}

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const username = 'user' + Math.random().toString(36).substring(7);
  const email = username + '@noroff.no'
  const first_name = 'F' + username
  const last_name = 'L' + username
  const password = 'password123';
  const is_superuser = false

  const payload = {
    username: username,
    email: email,
    first_name: first_name,
    last_name: last_name,
    password:password,
    is_superuser: is_superuser

  };
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post('https://noroffapi.pythonanywhere.com/user/', JSON.stringify(payload), params);

  // Validate response
  if (response.status === 200) {
    console.log(`User ${username} registered successfully.`);
  } else {
    console.error(`Registration failed. Status code: ${response.status}`);
  }

  sleep(1);
}

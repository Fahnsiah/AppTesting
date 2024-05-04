import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const username = 'admin'; 
  const password = 'admin';

  const payload = {
    username: username,
    password: password,
  };

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post('https://noroffapi.pythonanywhere.com/login/', JSON.stringify(payload), params);

  // Validate response
  if (response.status === 200) {
    console.log(`User ${username} logged in successfully.`);
  } else {
    console.error(`Login failed. Status code: ${response.status}`);
  }

  sleep(1);
}

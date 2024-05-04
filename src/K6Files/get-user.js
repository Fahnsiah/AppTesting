import http from 'k6/http';
import { check } from 'k6';

export default function () {
  // Step 1: Authenticate user
  const authResponse = http.post('https://noroffapi.pythonanywhere.com/login/', {
    username: 'admin',
    password: 'admin',
  });

  // Validate authentication response
  check(authResponse, {
    'User authentication successful': (r) => r.status === 200,
  });

  // Step 2: Retrieve products from the catalog
  const catalogResponse = http.get('https://noroffapi.pythonanywhere.com/user/', {
    headers: { Authorization: `Bearer ${authResponse.json().access}` },
  });

  // Validate catalog response
  check(catalogResponse, {
    'User retrieval successful': (r) => r.status === 200,
  });
}

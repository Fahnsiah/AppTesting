import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  // Send a GET request to the specified URL
  let res = http.get('https://noroffapi.pythonanywhere.com/user/');

  // Verify that the response status code is 200 (OK)
  check(res, {
    'status is 200': (r) => r.status === 200
  });

  // Simulate a delay between requests
  sleep(1);
}
import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 100 }, // ramp up to 100 virtual users over 1 minute
    { duration: '3m', target: 100 }, // stay at 100 virtual users for 3 minutes
    { duration: '1m', target: 0 },   // ramp down to 0 virtual users over 1 minute
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete within 500ms
  },
};

export default function () {
  http.get('https://noroffapi.pythonanywhere.com/');
  sleep(1);
}

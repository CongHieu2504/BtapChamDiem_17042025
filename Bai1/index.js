const express = require('express');
const app = express();
const port = 3000;

// Biến để đếm số lần gọi
let callCount = 0;

// Middleware để kiểm tra số lần gọi API
app.get('/status', (req, res) => {
  callCount++;

  if (callCount < 6) {
    return res.json({ status: 'stop', message: `You have called ${callCount} times` });
  } else {
    return res.json({ status: 'open', message: 'You have called the API 6 times. Now the status is open.' });
  }
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
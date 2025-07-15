const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log("มีการเรียกหน้า /");
  res.send("Hello Debugger!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

console.log("สวัสดีจาก CLI IDE Project!");


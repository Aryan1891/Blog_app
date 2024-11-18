const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());

app.get('/test', (req, res) => {
  res.json('Hello forld!');
});

app.listen(4000);
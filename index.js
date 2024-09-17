const http = require('http');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const express = require('express');
const xss = require('xss-clean');

const mongoSanitize = require('express-mongo-sanitize');
const app = express();
app.use(express.json());

app.use(xss());
app.use(mongoSanitize());

app.use('/api', routes);
const PORT = process.env.PORT || 3000;
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};
const httpServer = app.listen(PORT, async () => {
  await mongoose
    .connect(
      'mongodb+srv://siddhantthegts:rlWEzd7zU5rArWZi@cluster0.mkspu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log('Connected to MongoDB atlas'))
    .catch((err) => console.log(`Error connecting with the database ${err}`));
  console.log(`Server is listening to port number ${PORT} `);
});

require('express-async-errors');
require('dotenv').config();

const imageRouter = require('./routes/imageRouter');

const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

// routes
app.get('/', (_req, res) => res.send('<h1>Image to ASCII API</h1>'));
app.use('/api/v1/image', imageRouter);

//product routes
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//vars
const port = process.env.API_PORT;

const start = async () => {
  try {
    app.listen(port, console.log(`Server listen on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();

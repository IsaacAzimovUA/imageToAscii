require('express-async-errors');

const imageRouter = require('./routes/imageRouter');

const express = require('express');
const app = express();
const cors = require('cors');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

app.use(express.json());
app.use(cors());

// routes
app.get('/', (_req, res) => res.send('<h1>Image to ASCII API</h1>'));
app.use('/api/v1/image', imageRouter);

//product routes
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//vars
const port = 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server listen on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();

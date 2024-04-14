require('express-async-errors');
require('dotenv').config();
const https = require('https');
const fs = require('fs');

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
app.get('/home', (_req, res) => res.send('<h1>Image to ASCII API</h1>'));
app.use('/api/v1/image', imageRouter);

//product routes
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//vars
const port = process.env.API_PORT;

const httpOptions = {
  key: fs.readFileSync('./ssl/privkey.pem'),
  cert: fs.readFileSync('./ssl/fullchain.pem'),
};

const server = https.createServer(httpOptions, app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

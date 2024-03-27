const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = async (err, _req, res, _next) => {
  console.log('errorHandlerMiddleware ~ err:', err);
  return res.status(StatusCodes.NOT_FOUND).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;

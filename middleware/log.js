const logMiddleware = (req, res, next) => {
  const currentDate = new Date();
  console.log(`New request is comming ${currentDate}`);
};

module.exports = logMiddleware;

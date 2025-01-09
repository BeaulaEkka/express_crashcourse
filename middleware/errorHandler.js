const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(404).json({ msg: err.message });
};
export default errorHandler;

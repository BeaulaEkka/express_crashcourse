const errorHandler = (err, req, res, next) => {
  res.status(404).json({ msg: "error from error Handler" });
};
export default errorHandler;

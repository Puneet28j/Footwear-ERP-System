export const errorHandler = (err, req, res, next) => {
  console.error("❌", err);

  // mongo duplicate
  if (err?.code === 11000) {
    return res.status(400).json({
      message: "Duplicate key",
      key: err.keyValue,
    });
  }

  return res.status(500).json({
    message: err.message || "Something went wrong",
  });
};

export const ok = (res, message = "success", data = null) => {
  return res.json({ message, data });
};

export const created = (res, message = "created", data = null) => {
  return res.status(201).json({ message, data });
};

export const fail = (res, code = 400, message = "bad request") => {
  return res.status(code).json({ message });
};

import {
  createType,
  getTypes,
  getTypeById,
  updateTypeById,
  deleteTypeById,
} from "../services/type.service.js";

export const create = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "name is required" });
    }
    const type = await createType(req.body);
    return res.status(201).json({ message: "type created", data: type });
  } catch (err) {
    next(err);
  }
};

export const list = async (req, res, next) => {
  try {
    const types = await getTypes();
    return res.json({ message: "type list", data: types });
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const type = await getTypeById(req.params.id);
    if (!type) return res.status(404).json({ message: "type not found" });
    return res.json({ message: "type detail", data: type });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const type = await updateTypeById(req.params.id, req.body);
    if (!type) return res.status(404).json({ message: "type not found" });
    return res.json({ message: "type updated", data: type });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const type = await deleteTypeById(req.params.id);
    if (!type) return res.status(404).json({ message: "type not found" });
    return res.json({ message: "type deleted", data: type });
  } catch (err) {
    next(err);
  }
};

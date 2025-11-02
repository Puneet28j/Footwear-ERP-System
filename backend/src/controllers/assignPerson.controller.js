import {
  createAssignPerson,
  getAssignPersons,
  getAssignPersonById,
  updateAssignPersonById,
  deleteAssignPersonById,
} from "../services/assignPerson.service.js";

export const create = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "name is required" });
    }
    const person = await createAssignPerson(req.body);
    return res
      .status(201)
      .json({ message: "assign person created", data: person });
  } catch (err) {
    next(err);
  }
};

export const list = async (req, res, next) => {
  try {
    const persons = await getAssignPersons();
    return res.json({ message: "assign person list", data: persons });
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const person = await getAssignPersonById(req.params.id);
    if (!person)
      return res.status(404).json({ message: "assign person not found" });
    return res.json({ message: "assign person detail", data: person });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const person = await updateAssignPersonById(req.params.id, req.body);
    if (!person)
      return res.status(404).json({ message: "assign person not found" });
    return res.json({ message: "assign person updated", data: person });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const person = await deleteAssignPersonById(req.params.id);
    if (!person)
      return res.status(404).json({ message: "assign person not found" });
    return res.json({ message: "assign person deleted", data: person });
  } catch (err) {
    next(err);
  }
};

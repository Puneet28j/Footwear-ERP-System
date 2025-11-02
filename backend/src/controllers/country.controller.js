import {
  createCountry,
  getCountries,
  getCountryById,
  updateCountryById,
  deleteCountryById,
} from "../services/country.service.js";

export const create = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "name is required" });
    }
    const country = await createCountry(req.body);
    return res.status(201).json({ message: "country created", data: country });
  } catch (err) {
    next(err);
  }
};

export const list = async (req, res, next) => {
  try {
    const countries = await getCountries();
    return res.json({ message: "country list", data: countries });
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const country = await getCountryById(req.params.id);
    if (!country) return res.status(404).json({ message: "country not found" });
    return res.json({ message: "country detail", data: country });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const country = await updateCountryById(req.params.id, req.body);
    if (!country) return res.status(404).json({ message: "country not found" });
    return res.json({ message: "country updated", data: country });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const country = await deleteCountryById(req.params.id);
    if (!country) return res.status(404).json({ message: "country not found" });
    return res.json({ message: "country deleted", data: country });
  } catch (err) {
    next(err);
  }
};

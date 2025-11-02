// controllers/company.controller.js
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} from "../services/company.service.js";

export const create = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "name is required" });
    }

    const company = await createCompany(req.body);

    return res.status(201).json({
      message: "company created",
      data: company,
    });
  } catch (err) {
    next(err);
  }
};

export const list = async (req, res, next) => {
  try {
    const companies = await getAllCompanies();
    return res.json({
      message: "company list",
      data: companies,
    });
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const company = await getCompanyById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: "company not found" });
    }
    return res.json({
      message: "company detail",
      data: company,
    });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const company = await updateCompanyById(req.params.id, req.body);
    if (!company) {
      return res.status(404).json({ message: "company not found" });
    }
    return res.json({
      message: "company updated",
      data: company,
    });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const company = await deleteCompanyById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: "company not found" });
    }
    return res.json({
      message: "company deleted",
      data: company,
    });
  } catch (err) {
    next(err);
  }
};

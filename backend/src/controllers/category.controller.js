import {
  createCategoryForBrand,
  getCategoriesForBrand,
  getCategoryByIdForBrand,
  updateCategoryForBrand,
  deleteCategoryForBrand,
} from "../services/category.service.js";

export const create = async (req, res, next) => {
  try {
    const { companyId, brandId } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }

    const category = await createCategoryForBrand(companyId, brandId, {
      name,
    });

    return res
      .status(201)
      .json({ message: "category created", data: category });
  } catch (err) {
    next(err);
  }
};

export const list = async (req, res, next) => {
  try {
    const { companyId, brandId } = req.params;
    const categories = await getCategoriesForBrand(companyId, brandId);
    return res.json({ message: "category list", data: categories });
  } catch (err) {
    next(err);
  }
};

export const get = async (req, res, next) => {
  try {
    const { companyId, brandId, categoryId } = req.params;
    const category = await getCategoryByIdForBrand(
      companyId,
      brandId,
      categoryId
    );
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    return res.json({ message: "category detail", data: category });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const { companyId, brandId, categoryId } = req.params;
    const category = await updateCategoryForBrand(
      companyId,
      brandId,
      categoryId,
      req.body
    );
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    return res.json({ message: "category updated", data: category });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { companyId, brandId, categoryId } = req.params;
    const category = await deleteCategoryForBrand(
      companyId,
      brandId,
      categoryId
    );
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    return res.json({ message: "category deleted", data: category });
  } catch (err) {
    next(err);
  }
};

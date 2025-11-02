import { Router } from "express";
import {
  create,
  list,
  get,
  update,
  remove,
} from "../controllers/category.controller.js";

const router = Router({ mergeParams: true });

// /api/companies/:companyId/brands/:brandId/categories
router.post("/", create);
router.get("/", list);
router.get("/:categoryId", get);
router.put("/:categoryId", update);
router.delete("/:categoryId", remove);

export default router;

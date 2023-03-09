import express from "express";

import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  categoryController,
  singleCategoryController,
  deleteCategoryController,
  createCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

// routes
// create category post
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
// update category put
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
// get all category get
router.get("/get-category", categoryController);

// single category get
router.get("/single-category/:slug", singleCategoryController);

// delete category delete
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;

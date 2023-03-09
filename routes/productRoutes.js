import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import {
  createProductController,
  productPhotoController,
  getSingleProductController,
  getProductController,
  deleteProductController,
  searchProductController,
  productCountController,
  productListController,
  productFilterController,
  updateProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} from "./../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();
// routes
// create product post
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// get all products get
router.get("/get-product", getProductController);
// single product get
router.get("/get-product/:slug", getSingleProductController);
// get photo
router.get("/product-photo/:pid", productPhotoController);
// delete product
router.delete("/delete-product/:pid", deleteProductController);
// update products get
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// filter product
router.post("/product-filters", productFilterController);

// product count
router.get("/product-count", productCountController);

// product per page
router.get("/product-list/:page", productListController);

// search product
router.get("/search/:keyword", searchProductController);

// simillar product
router.get("/related-product/:pid/:cid", relatedProductController);

// category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;

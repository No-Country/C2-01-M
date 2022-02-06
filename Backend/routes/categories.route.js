const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

const categoriesController = require("../controller/categories.controller");

const validateFields = require("../helpers/validatorFields");
const validateJWT = require("../helpers/validateJWT");
const { existsCategoryById } = require("../helpers/dbValidator");
const { isAdmin } = require("../helpers/validateRoles");

router
  .post(
    "/",
    [
      validateJWT,
      check("name", "The name is required").not().isEmpty(),
      validateFields,
    ],
    categoriesController.createCategory
  )

  .get("/", categoriesController.getAllCategories)

  .get(
    "/:id",
    [
      check("id", "Not a valid Mongo ID").isMongoId(),
      check("id").custom(existsCategoryById),
      validateFields,
    ],
    categoriesController.getCategory
  )

  .put(
    "/:id",
    [
      validateJWT,
      check("name", "The name is required").not().isEmpty(),
      check("id").custom(existsCategoryById),
      validateFields,
    ],
    categoriesController.updateCategory
  )
  .delete(
    "/:id",
    [
      validateJWT,
      isAdmin,
      check("id", "Not a valid Mongo ID").isMongoId(),
      check("id").custom(existsCategoryById),
      validateFields,
    ],
    categoriesController.deleteCategory
  );

module.exports = router;

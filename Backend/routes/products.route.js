const { check } = require('express-validator');
const { Router } = require("express");

const router = Router();

const { existsCategoryById, existProductById } = require('../helpers/dbValidator');
const validateFields = require('../helpers/validatorFields');
const validateJWT = require('../helpers/validateJWT');
const { isAdmin } = require('../helpers/validateRoles');

const productsController = require("../controller/products.controller");

router
  .post("/", 
  [
    validateJWT,
    check('title', 'The title is required').not().isEmpty(),
    check('price', 'The price is required').not().isEmpty(),
    check('image', 'The image is required').not().isEmpty(),
    check('category', 'This is not a valid Mongo ID').isMongoId(),
    check('category').custom(existsCategoryById),
    check('name', 'The name is required').not().isEmpty(),
    // isAdmin,
    validateFields,
],
  productsController.createProduct)

  
  .get("/:id", 
  [
    check('id', 'This is not a valid Mongo ID').isMongoId(), 
    check('id').custom(existProductById), 
    validateFields
  ],
  productsController.getProduct)

  
  .get("/", 
  [	
    validateJWT,
    validateFields
  ], 
  productsController.getAllProducts)

  
  .put("/:id", 
  [ validateJWT,
    check('id').custom( existProductById ),
    validateFields
  ],
  productsController.updateProduct)

  
  .delete("/:id", 
  [
    validateJWT,
    check('id', 'This is not a valid Mongo ID').isMongoId(),
    check('id').custom( existProductById ),
    validateFields,

],
  productsController.deleteProduct);

module.exports = router;

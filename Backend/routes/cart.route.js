const { Router } = require("express");
const router = Router();

const cartController = require("../controller/cart.controller");

router
  .post("/", cartController.addItemToCart)
  .get("/", cartController.getCart)
  .delete("/", cartController.emptyCart);

module.exports = router;

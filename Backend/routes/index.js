const { Router } = require("express");

const authRoute = require("../routes/auth.route");
const usersRoute = require("../routes/users.route");
const productsRoute = require("../routes/products.route");
const categoriesRoute = require("../routes/categories.route");
const cartRoute = require("../routes/cart.route");
const paymentRoute = require("../routes/payment.route");

const router = Router();

router.use("/", authRoute);
router.use("/users", usersRoute);
router.use("/products", productsRoute);
router.use("/categories", categoriesRoute);
router.use("/cart", cartRoute);
router.use("/payment", paymentRoute);

module.exports = router;
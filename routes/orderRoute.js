const express = require("express");
const { isVerifiedUser } = require("../middlewares/tokenVerification");
const { addOrder, getOrders, getOrderById, updateOrders } = require("../controllers/orderController");
const router = express.Router();

router.route("/").post(isVerifiedUser, addOrder);
router.route("/").get(isVerifiedUser, getOrders);
router.route("/:id").get(isVerifiedUser, getOrderById);
router.route("/:id").put(isVerifiedUser, updateOrders);

module.exports = router;
const express = require("express");
const router = express.Router();
const {
    getAllStarProducts,
    getAllStarProductsTesting,
    saveStarProducts,
    updateStarProduct,
    deactivateStarProduct,
    activateStarProduct
} = require("../controller/star");
router.route("/").get(getAllStarProducts);
router.route("/testing").get(getAllStarProductsTesting);
router.post("/saveproducts", saveStarProducts);
router.post("/updateproducts", updateStarProduct);
router.post("/deactivateproducts", deactivateStarProduct);
router.post("/activateproducts", activateStarProduct);

module.exports = router;

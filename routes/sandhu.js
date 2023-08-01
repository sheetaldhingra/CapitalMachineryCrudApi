const express = require("express");
const router = express.Router();
const {
    getAllSandhuProducts,
    getAllSandhuProductsTesting,
    saveSandhuProducts,
    updateSandhuProduct,
    deactivateSandhuProduct,
    activateSandhuProduct
} = require("../controller/sandhu");
router.route("/").get(getAllSandhuProducts);
router.route("/testing").get(getAllSandhuProductsTesting);
router.post("/saveproducts", saveSandhuProducts);
router.post("/updateproducts", updateSandhuProduct);
router.post("/deactivateproducts", deactivateSandhuProduct);
router.post("/activateproducts", activateSandhuProduct);

module.exports = router;

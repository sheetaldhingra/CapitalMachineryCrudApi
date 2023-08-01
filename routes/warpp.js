const express = require("express");
const router = express.Router();
const {
    getAllWarppProducts,
    getAllWarppProductsTesting,
    saveWarppProducts,
    updateWarppProduct,
    deactivateWarppProduct,
    activateWarppProduct
} = require("../controller/warpp");
router.route("/").get(getAllWarppProducts);
router.route("/testing").get(getAllWarppProductsTesting);
router.post("/saveproducts", saveWarppProducts);
router.post("/updateproducts", updateWarppProduct);
router.post("/deactivateproducts", deactivateWarppProduct);
router.post("/activateproducts", activateWarppProduct);

module.exports = router;

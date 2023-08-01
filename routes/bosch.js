const express = require("express");
const router = express.Router();
const {
    getAllBoschProducts,
    getAllBoschProductsTesting,
    saveBoschProducts,
    updateBoschProduct,
    deactivateBoschProduct,
    activateBoschProduct
} = require("../controller/bosch");
router.route("/").get(getAllBoschProducts);
router.route("/testing").get(getAllBoschProductsTesting);
router.post("/saveproducts", saveBoschProducts);
router.post("/updateproducts", updateBoschProduct);
router.post("/deactivateproducts", deactivateBoschProduct);
router.post("/activateproducts", activateBoschProduct);

module.exports = router;

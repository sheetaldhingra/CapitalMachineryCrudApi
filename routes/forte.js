const express = require("express");
const router = express.Router();
const {
    getAllForteProducts,
    getAllForteProductsTesting,
    saveForteProducts,
    updateForteProduct,
    deactivateForteProduct,
    activateForteProduct
} = require("../controller/forte");
router.route("/").get(getAllForteProducts);
router.route("/testing").get(getAllForteProductsTesting);
router.post("/saveproducts", saveForteProducts);
router.post("/updateproducts", updateForteProduct);
router.post("/deactivateproducts", deactivateForteProduct);
router.post("/activateproducts", activateForteProduct);

module.exports = router;

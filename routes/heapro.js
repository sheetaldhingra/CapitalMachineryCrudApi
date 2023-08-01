const express = require("express");
const router = express.Router();
const {
    getAllHeaproProducts,
    getAllHeaproProductsTesting,
    saveHeaproProducts,
    updateHeaproProduct,
    deactivateHeaproProduct,
    activateHeaproProduct
} = require("../controller/heapro");
router.route("/").get(getAllHeaproProducts);
router.route("/testing").get(getAllHeaproProductsTesting);
router.post("/saveproducts", saveHeaproProducts);
router.post("/updateproducts", updateHeaproProduct);
router.post("/deactivateproducts", deactivateHeaproProduct);
router.post("/activateproducts", activateHeaproProduct);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
    getAllDuraProducts,
    getAllDuraProductsTesting,
    saveDuraProducts,
    updateDuraProduct,
    deactivateDuraProduct,
    activateDuraProduct
} = require("../controller/dura");
router.route("/").get(getAllDuraProducts);
router.route("/testing").get(getAllDuraProductsTesting);
router.post("/saveproducts", saveDuraProducts);
router.post("/updateproducts", updateDuraProduct);
router.post("/deactivateproducts", deactivateDuraProduct);
router.post("/activateproducts", activateDuraProduct);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
    getAllRalliProducts,
    getAllRalliProductsTesting,
    saveRalliProducts,
    updateRalliProduct,
    deactivateRalliProduct,
    activateRalliProduct
} = require("../controller/ralli");
router.route("/").get(getAllRalliProducts);
router.route("/testing").get(getAllRalliProductsTesting);
router.post("/saveproducts", saveRalliProducts);
router.post("/updateproducts", updateRalliProduct);
router.post("/deactivateproducts", deactivateRalliProduct);
router.post("/activateproducts", activateRalliProduct);

module.exports = router;

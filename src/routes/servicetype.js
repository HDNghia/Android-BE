const serviceTypeController = require("../controllers/servicetypeController");

const router = require("express").Router();

// Add serviceType
router.post("/", serviceTypeController.addAServiceType);

// Get all serviceType
router.get("/", serviceTypeController.getAllServiceType);

module.exports = router;
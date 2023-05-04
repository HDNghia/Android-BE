const foodController = require("../controllers/foodController");

const router = require("express").Router();

//ADD A food
router.post("/", foodController.addAFood);

//GET ALL foods
router.get("/", foodController.getAllFoods);

//GET foods by id
router.get("/:id", foodController.getFoodByID);

//UPDATE A food
router.put("/:id", foodController.updateFood);


module.exports = router;
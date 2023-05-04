const foodsUserController = require("../controllers/foodsUserController");

const router = require("express").Router();

//ADD A foodsUser
router.post("/", foodsUserController.addAFoodUsers);

//UPDATE A foodsUser by userid, foodid
router.put("/:id", foodsUserController.updateFoodUsers);

// Get foodsUser by userid, date return foodUser and foods info
router.get("/:id", foodsUserController.getFoodByUserID);

// Delete foodUser by userid and foodid
router.delete("/", foodsUserController.DeleteAFoodUser);

module.exports = router;
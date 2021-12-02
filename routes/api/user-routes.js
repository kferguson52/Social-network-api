const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).post(addFriend).put(updateUser).delete(deleteUser).delete(removeFriend);

module.exports = router;

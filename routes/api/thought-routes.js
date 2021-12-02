const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  removeReactions,
  addReaction
} = require("../../controllers/thought-controller");

router.route('/').get(getAllThought).post(addThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReactions);

module.exports = router;

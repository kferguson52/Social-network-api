const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// Go ahead and create a DELETE route to handle removeReply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


module.exports = router;
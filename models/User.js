// const dateFormat = require("../utils/dateFormat");
// WHY IS TYPES GREYED OUT??
const { Schema, model, types } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "true",
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: "true",
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      
    },
    id: true,
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;

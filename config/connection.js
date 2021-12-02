// Need to require mongoose
const mongoose = require('mongoose');

// Tells which Mongoose which DB we are connected too
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false
});

module.exports = mongoose.connection;
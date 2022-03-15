const mongoose = require('mongoose');
const colors = require('colors');

mongoose.connection.once('open', () => {
  console.log(`MongoDB connection ready`.cyan.underline.bold);
});

mongoose.connection.on('error', (err) => {
  console.error(`${err}.`.red.underline.bold);
});

exports.mongoConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

exports.mongoDisconnect = async () => {
  await mongoose.disconnect();
};

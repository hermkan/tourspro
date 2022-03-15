const fs = require('fs');
const dotenv = require('dotenv');
const colors = require('colors');
const Tour = require('../../models/tourModel');
const mongo = require('../../mongo');

dotenv.config({ path: './config.env' });

const connectToDB = async () => {
  await mongo.mongoConnect();
};

connectToDB();

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded!'.green.inverse);
  } catch (err) {
    console.log(`${err}.red.inverse`);
  }
  process.exit(1);
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit(1);
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

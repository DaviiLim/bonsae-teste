const mongoose = require('mongoose');

require('dotenv').config();

const connectDatabase = async () => {

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Conexão feita com o MONGO')
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

};

module.exports = connectDatabase;

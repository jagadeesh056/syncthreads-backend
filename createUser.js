const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const createUser = async () => {
    const username = 'admin';
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();
    console.log('User created successfully');
    mongoose.connection.close();
};

createUser();

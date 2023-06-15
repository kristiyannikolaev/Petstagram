const bcrypt = require('bcrypt');

const jwt = require('../lib/jwt');
const User = require('../models/User');
const { SECRET } = require('../utils/util');

exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if(!user) {
        throw new Error('Invalid username or password');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        throw new Error('Invalid username or password');
    }

    const token = await generateToken(user); 
    return token;
};

exports.register = async (username, email, password, repeatPass) => {
    const user = await User.countDocuments({ username });
    if(user) {
        throw new Error(' Username already exists')
    }

    const createdUser =  User.create({ username, email, password, repeatPass});

    const token = generateToken(createdUser);
    return token;
};

async function generateToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    }

    const token = await jwt.sign(payload, SECRET);
    
    return token;
}

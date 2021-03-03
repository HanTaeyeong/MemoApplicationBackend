import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const AuthSchema = new Schema({
    username: String,
    hashedPassword: String,
    posts: [mongoose.Types.ObjectId]
},
    { timestamps: true });

AuthSchema.methods.setPassword = async function (password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

AuthSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.hashedPassword);
}

AuthSchema.statics.findByUsername = function (username) {
    return this.findOne({ username })
}

AuthSchema.methods.getSerialized = function () {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

AuthSchema.methods.generateToken = function () {
    const token = jwt.sign({
        _id: this.id,
        username: this.username,
    },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )

    return token;
}


const Auth = mongoose.model('Auth', AuthSchema);
export default Auth;

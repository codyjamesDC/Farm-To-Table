// Authentication controller for handling user login
import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        //Success Message
        res.status(200).send({ message: 'Login successful', user: {
            userId: user._id,
            email: user.email,
            role: user.role
        }});

    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
};
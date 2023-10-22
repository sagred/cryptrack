import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './user.js';

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        res.json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).send('Invalid email or password');
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default authRouter;

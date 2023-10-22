import express from 'express';
import { getKrakenBalance } from './services/kraken.js';
import { getCoinbaseBalance } from './services/coinbase.js';
import dotenv from 'dotenv';
import authRouter from './auth.js';
import redis from './redisClient.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

const cred = {
    krakenApiKey: process.env.KRAKEN_API_KEY,
    krakenSecret: process.env.KRAKEN_SECRET
}

app.get('/', async (req, res) => {

    try {
        res.json({ message: 'Hello World!' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/balance/:service', async (req, res) => {
    const service = req.params.service;

    try {
        let balance;

        switch (service) {
            case 'kraken':
                balance = await getKrakenBalance(cred.krakenApiKey, cred.krakenSecret);
                break;
            case 'coinbase':
                balance = await getCoinbaseBalance('x-coinbase-oauth-token');
                break;
            default:
                return res.status(400).send('Invalid service specified');
        }

        // await updateUserBalance(1, balance);
        if (balance) {
            await redis.set(`balance:${service}`, JSON.stringify(balance), 'EX', 600);
        }

        res.json(balance);
    } catch (error) {
        const fallbackBalance = await redis.get(`balance:${service}`);
        if (fallbackBalance) {
            res.json(JSON.parse(fallbackBalance));
        } else {
            res.status(500).send(error.message);
        }
    }
});

async function updateUserBalance(userId, newBalance) {
    const [user, created] = await User.findOrCreate({
        where: { id: userId },
        defaults: { balance: newBalance },
    });

    if (!created) {
        user.balance = newBalance;
        await user.save();
    }
}

export default app;

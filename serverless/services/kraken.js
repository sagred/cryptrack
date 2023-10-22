import axios from 'axios';
import crypto from 'crypto';

export const getKrakenBalance = async (apiKey, apiSecret) => {
    const apiURL = 'https://api.kraken.com/0/private/Balance';
    const apiPath = '/0/private/Balance';

    const nonce = Date.now().toString();

    const postData = new URLSearchParams();
    postData.append('nonce', nonce);

    const message = nonce + postData.toString();
    const secret_buffer = Buffer.from(apiSecret, 'base64');
    const hash = crypto.createHash('sha256');
    const hmac = crypto.createHmac('sha512', secret_buffer);
    const hash_digest = hash.update(message).digest('binary');
    const hmac_digest = hmac.update(apiPath + hash_digest, 'binary').digest('base64');

    try {
        const headers = {
            'API-Key': apiKey,
            'API-Sign': hmac_digest,
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        };
        const response = await axios.post(apiURL, postData, { headers: headers });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching Kraken balance:', error);
        throw new Error('Error fetching Kraken balance.');
    }
}

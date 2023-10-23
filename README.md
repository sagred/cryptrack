# Cryptrack

Track all your web3 and web2 assets in one place! Cryptrack aggregates your portfolio from multiple platforms like Kraken, Coinbase, Robinhood, and more.

<img src="https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/Screenshot_20231022-194732.png" width="400">

![Cryptrack Demo](https://gtrvjdtwdfnbjeytdjvv.supabase.co/storage/v1/object/public/warp/public/cryptrack.gif)

## Project Structure

- `cryptrack-mobile-app` - Mobile app.
- `serverless` - Serverless Backend services to fetch data.

## Serverless

### Getting Started:

#### Prerequisites:

- [Node.js](https://nodejs.org/) (14.x)
- [Serverless Framework](https://www.serverless.com/)

#### Installation:

1. Clone the repository:

2. Navigate to the serverless directory:
   
   ```bash
   cd serverless
   ```

3. Install the dependencies:
   
   ```bash
   npm install
   ```

#### Local Development with Serverless:

1. Ensure you have the `serverless-offline` plugin installed (this should be part of your setup).
   
2. Start the local server:
   
   ```bash
   serverless offline
   ```

   Your service will be available at `http://localhost:3000/`.

#### Endpoints:

- Root: `GET /`
- Balance: `GET /balance/{service}` where service can be `kraken`, `coinbase`, etc.

#### Deployment:

Deploy the service to AWS Lambda:

```bash
serverless deploy
```

## Cryptrack Mobile App

### Built with:

- React Native Expo

### Getting Started:

#### Prerequisites:

- [Expo CLI](https://expo.dev/tools/cli)

#### Installation:

1. Navigate to the mobile app directory:

   ```bash
   cd cryptrack-mobile-app
   ```

2. Install the dependencies:
   
   ```bash
   npm install
   ```

3. Start the app:
   
   ```bash
   expo start
   ```

This will open a QR code in your terminal. Scan it with the [Expo Go app](https://expo.dev/client) on your Android or iOS device to preview the app in real-time as you develop.

---

Enjoy tracking your crypto assets with Cryptrack!
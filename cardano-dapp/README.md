# Fullstack Cardano Development Starterkit

This is a [Next.js](https://nextjs.org) project integrated with Cardano blockchain capabilities using Butane Protocol's Blaze SDK and UTxORPC provider.

## Prerequisites

- Docker installed on your system
- Node.js 18+ and npm/yarn/pnpm
- Git

## Setup

1. Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd cardano-dapp
npm install
```

2. Start the Dolos Data Node using Docker:

```bash
docker run -p 50051:50051 dcspark/dolos-node
```

## Dolos Multi-Network Setup

Start the Dolos nodes for different networks:

```bash
cd dolos-data-node
./scripts/start.sh all    # Start all networks
./scripts/start.sh preview  # Start only preview network
```

Network endpoints:
- Preview: http://localhost:50051
- Preprod: http://localhost:50052
- Mainnet: http://localhost:50053

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Cardano Integration

This project uses:
- [@butaneprotocol/blaze-cardano](https://github.com/butaneprotocol/blaze-cardano) for Cardano blockchain interaction
- [@utxorpc/blaze-provider](https://www.npmjs.com/package/@utxorpc/blaze-provider) for UTxO handling
- Dolos Data Node for blockchain data access

### Key Features
- Wallet connection support
- Transaction building and signing
- UTxO management
- Smart contract interaction

## Project Structure

```
cardano-dapp/
├── app/            # Next.js app directory
├── components/     # React components
├── lib/           # Cardano integration utilities
└── public/        # Static assets
```

## Learn More

- [Blaze SDK Documentation](https://github.com/butaneprotocol/blaze-cardano)
- [UTxORPC Documentation](https://github.com/utxorpc)
- [Next.js Documentation](https://nextjs.org/docs)

## Deployment

Deploy on Vercel or your preferred hosting platform:

1. Configure environment variables
2. Build and deploy:

```bash
npm run build
npm start
```

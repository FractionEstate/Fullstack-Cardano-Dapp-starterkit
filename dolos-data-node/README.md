# Dolos Data Node

Multi-network Cardano blockchain data node setup using Dolos.

## Directory Structure

```
dolos-data-node/
├── config/           # Network configurations
│   ├── base.yaml    # Base configuration
│   ├── preview.yaml # Preview network config
│   ├── preprod.yaml # Preprod network config
│   └── mainnet.yaml # Mainnet config
├── docker/          # Docker compose files
└── scripts/         # Management scripts
```

## Quick Commands

Start nodes:
```bash
npm start            # Start all networks
npm run start:preview  # Start preview network
npm run start:preprod  # Start preprod network
npm run start:mainnet  # Start mainnet network
```

Stop nodes:
```bash
npm run stop         # Stop all networks
npm run stop:preview   # Stop preview network
npm run stop:preprod   # Stop preprod network
npm run stop:mainnet   # Stop mainnet network
```

Clean data:
```bash
npm run clean        # Remove all data
npm run clean:preview  # Clean preview data only
npm run clean:preprod  # Clean preprod data only
npm run clean:mainnet  # Clean mainnet data only
```

View logs:
```bash
npm run logs         # All networks
npm run logs:preview   # Preview network
npm run logs:preprod   # Preprod network
npm run logs:mainnet   # Mainnet network
```

Manage nodes:
```bash
npm run status       # Check nodes status
npm run restart        # Restart all nodes
npm run restart:mainnet  # Restart mainnet node
```

## Network Endpoints

gRPC endpoints:
- Preview: http://localhost:50051
- Preprod: http://localhost:50052
- Mainnet: http://localhost:50053

Metrics endpoints:
- Preview: http://localhost:9091
- Preprod: http://localhost:9092
- Mainnet: http://localhost:9093

## Data Persistence

Each network maintains its own persistent volume:
- `preview-data`: Preview network chain data
- `preprod-data`: Preprod network chain data
- `mainnet-data`: Mainnet network chain data

## Monitoring

View logs for specific network:
```bash
docker logs -f dolos-preview
docker logs -f dolos-preprod
docker logs -f dolos-mainnet
```

Check metrics:
```bash
curl http://localhost:9091/metrics  # Preview
curl http://localhost:9092/metrics  # Preprod
curl http://localhost:9093/metrics  # Mainnet
```

## Configuration

Edit network-specific settings in `config/[network].yaml`:
- Magic numbers
- Network addresses
- Port configurations

Base settings in `config/base.yaml`:
- Storage configuration
- Log settings
- Metrics setup

## Maintenance

Stop specific network:
```bash
./scripts/stop.sh preview
```

Stop all networks:
```bash
./scripts/stop.sh all
```

Clean up data (warning: this removes chain data):
```bash
docker-compose down -v
```

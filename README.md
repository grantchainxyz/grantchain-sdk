# 🧠 GrantChain SDK

The official developer SDK for building on GrantChain — the AI-native Layer 2 for autonomous agents and AI model execution.

## 📦 Modules

- `hooks/` — React + wallet interaction hooks
- `agents/` — Agent deployment helpers
- `utils/` — Transaction builder, fee estimator, formatting tools

## 💡 Features

- Deploy and manage autonomous agents
- Interact with AI models via on-chain calls
- Sign and broadcast $GRANT transactions
- Easily integrate with wallets (Phantom, Solflare)

## 📦 Install

```bash
npm install @grantchain/sdk
```

## 🧪 Quick Start

```ts
import { useWallet } from '@grantchain/sdk';

const { connect, publicKey } = useWallet();
```

## 📄 License
MIT

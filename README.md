# Turbin 3 TypeScript Assignment

A TypeScript-based project for Solana cohort enrollment using Anchor framework.

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- Solana CLI tools
- Anchor Framework

## Installation

1. Clone the repository:

```bash
git clone  https://github.com/DhairyaMajmudar/turbin3-assignment.git
cd turbin3-typescript
```

2. Install dependencies

```bash
yarn install
```

## Scripts

1. Generate keypair

```bash
yarn keygen
```

2. Make an airdrop

```bash
yarn airdrop
```

3. Tranfer Sol

```bash
yarn transfer
```

3. Interact with IDL

```bash
yarn enroll
```

## Project Structure

```markdown
├── programs/
│ └── Turbin3_prereq/
├── airdrop.ts
├── .gitignore
├── enroll.ts
├── keygen.ts
├── package.json
├── README.md
├── transfer.ts
├── tsconfig.json
└── yarn.lock
```

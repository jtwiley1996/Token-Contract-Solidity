# Token-Contract-Solidity

## Overview

This project is a TypeScript-based development environment for creating and deploying Solidity smart contracts. It showcases the integration of Hardhat with TypeScript to enhance the development experience for Ethereum smart contracts. 

## Features

- **Solidity Contracts**: Develop and test Ethereum smart contracts using Solidity.
- **TypeScript Integration**: Use TypeScript for script writing and testing, leveraging its type safety and modern features.
- **Hardhat**: Utilize Hardhat for compiling, testing, and deploying smart contracts.
- **OpenZeppelin**: Incorporate industry-standard libraries for secure and reliable smart contract development.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/) (v8.x or later)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/Token-Contract-Solidity.git
   cd Token-Contract-Solidity

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Compile Contracts**
Compile the Solidity contracts using HardHat:
    ```bash
    npx hardhat compile
    ```

4. **Deploy Contracts**
Deploy the contracts to a local Hardhat network:
    ```bash
    npx hardhat run scripts/deploy.ts
    ```

5. **Test Contracts**
Run tests using Hardhat
    ```bash
    npx hardhat test
    ```

## Project Structure

- `contracts/`: Contains Solidity smart contracts. Includes `MyToken.sol` and `Lock.sol.`
- `scripts/`: TypeScript scripts for deploying contracts and other tasks. Includes `deploy.ts`.
- `test/`: TypeScript test files for smart contract testing.
- `typechain-types`/: TypeScript typings generated for smart contracts.

## Typescript Configuration

The project uses TypeScript for better development practices. The `tsconfig.json` file is configured as follows:

- `target`: `es2020` - Specifies the target ECMAScript version.
- `module`: `commonjs` - Module system used.
- `esModuleInterop`: `true` - Enables compatibility between CommonJS and ES Modules.
- `strict`: `true` - Enables all strict type-checking options.
- `resolveJsonModule`: `true` - Allows importing JSON files as modules.

### Dependencies

- `@nomicfoundation/hardhat-toolbox`: A Hardhat toolbox that includes Hardhat, Ethers.js, and other utilities.

- `@openzeppelin/contracts`: A library of reusable and secure smart contracts.

- `ethers`: A library for interacting with the Ethereum blockchain.

- `typescript`: A superset of JavaScript that provides type safety.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.


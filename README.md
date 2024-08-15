# MyToken Solidity Contract

## Overview

This project is a basic ERC20 token contract built using Solidity and OpenZeppelin libraries. It demonstrates how to create a simple token with ownership features and an initial supply. The token is deployed on the Ethereum blockchain and can be interacted with using Truffle.

## Features

- **ERC20 Token**: Implements the ERC20 standard for fungible tokens.
- **Ownership**: The contract deployer is set as the initial owner.
- **Initial Supply**: Mints an initial supply of tokens to the owner’s address.
- **Decimal Precision**: Supports a precision of up to 18 decimal places.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache) (or another Ethereum local development environment)

## Getting Started

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    cd yourrepository
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Compile Contracts**

    ```bash
    truffle compile
    ```

4. **Deploy Contracts**

    Ensure Ganache or another Ethereum development network is running. Then deploy the contracts:

    ```bash
    truffle migrate --reset
    ```

5. **Test Contracts**

    ```bash
    truffle test
    ```

## Project Structure

- `contracts/`: Contains Solidity smart contracts. Includes `MyToken.sol`.
- `migrations/`: Contains migration scripts for deploying contracts. Includes `2_deploy_contracts.js`.
- `test/`: JavaScript test files for smart contract testing. Includes `MyToken.test.js`.
- `truffle-config.js`: Configuration file for Truffle.

## Code Explanation

1. **ERC20 Implementation**: `MyToken.sol` inherits from OpenZeppelin’s ERC20 implementation, providing standard token functionality.
2. **Ownership Management**: Includes functions to transfer ownership and check the current owner.
3. **Minting**: Mints tokens to the owner’s address during deployment with a precision of 18 decimal places.

## Contributing

Feel free to fork the repository and submit pull requests. If you encounter any issues, please open an issue on GitHub.

## License

This project is licensed under the MIT License.

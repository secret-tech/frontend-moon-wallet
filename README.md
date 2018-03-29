![MOON Wallet](https://monosnap.com/file/AWvzmQe6IvNezvjIhYwkSDWbiKB5en.png)

# Moon Wallet Frontend module

![GitHub (pre-)release](https://img.shields.io/github/release/JincorTech/frontend-moon-wallet/all.svg)
[![Build Status](https://travis-ci.org/secret-tech/frontend-moon-wallet.svg?branch=master)](https://travis-ci.org/secret-tech/frontend-moon-wallet)
![license](https://img.shields.io/github/license/JincorTech/frontend-moon-wallet.svg)

This is frontend module of [Moon Wallet](https://moonwallet.tech/). Checkout backend [here](https://github.com/JincorTech/backend-token-wallets).

This web client can be used to connect MOON's backend. Currently it has the following functionality:

1. Registration & Authorization
1. Register any Token by specified contract address
1. Generate and manage **multiple** Ethereum wallets by one account
1. Transfer ETH / ERC-20 
1. Transferring is protected by payment password
1. Displaying transaction history for ETH/ERC-20
1. Notification management
1. All important actions are protected with 2FA (email or google authenticator) 
by integration with 
[Jincor Backend Verify](https://github.com/JincorTech/backend-verify) 
   You can disable some kind of verifications as well.

For more info check [**API DOCS**](https://jincortech.github.io/backend-token-wallets)

![Moon Wallet Screenshot](https://monosnap.com/file/ju7HjvPDg0csEeInRo11JrudDAJDc3.png)

## Technology stack

1. React & Redux & Saga.
1. Webpack
1. socket.io

## How start application loacally?

1. Clone this repo.
1. `$ yarn`
1. `$ cp .env.example .env`
1. `$ yarn start`
1. Go to `localhost:3000/auth/sign-in`

## How to build application for production?

Webpack generate static `dist` directory with production build of app. You just need serve it with your server like nginx.

1. `$ yarn`
1. `$ cp .env.prod .env`
1. `$ yarn build`

## Environment variables

``cp .env.example .env`` - copy example dotenv file and specify your own values in `.env`

You can use different environment variables. Create `.env.stage`, `.env.prod` and `.env.dev` and copy the file you need.

## Scripts

``yarn start`` - start application in development mode

``yarn build`` - build application into `/dist` directory

``yarn build:clean`` - remove prev `/dist` and build application

``yarn serve`` - serve `/dist` directory. Requires build application before run

## [Contributing](https://github.com/JincorTech/frontend-moon-wallet/blob/develop/CONTRIBUTING.md)

______________________________

[LICENSE](https://github.com/JincorTech/frontend-moon-wallet/blob/develop/LICENSE) @ [secret_tech](http://secrettech.io/)


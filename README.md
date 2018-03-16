# Moon Wallet Frontend module

This is frontend module of [Moon Wallet](https://moonwallet.tech/). Checkout backend [here](https://github.com/JincorTech/backend-token-wallets).

![MOON Wallet](https://monosnap.com/file/AWvzmQe6IvNezvjIhYwkSDWbiKB5en.png)

This web client can be used to connect MOON's backend. 

For more info check [**API DOCS**](https://jincortech.github.io/backend-token-wallets)

![Moon Wallet Screenshot](https://monosnap.com/file/ju7HjvPDg0csEeInRo11JrudDAJDc3.png)

## Technology stack

1. React & Redux.
1. Webpack
1. socket.io

## How start application loacally in development mode?

1. Clone this repo.
1. Download deps `$ yarn`
1. Run `$ cp .env.example .env` - specify backend address
1. Run `$ yarn start` browser sync automatically open application after build

## How to build application for production?

Webpack generate static `dist` directory with production build of app. You just need serve it with your server like nginx.

## Commit hooks

That boilerplate uses pre-commit hooks and run some scripts before making git commit. To see what is started before commit check package.json pre-commit block. Default - `yarn lint:all` and `yarn test`. To ignore the check, use `-n` e.g `git commit -n -m 'Your amazing commit msg'`.

## Environment variables

``cp .env.example .env`` - copy example dotenv file and specify your own values in `.env`

You can use different environment variables. Create `.env.stage`, `.env.prod` and `.env.dev` and copy the file you need.

To access values inside application call `console.log(process.env)`.

## Scripts

``yarn start`` - start application in development mode

``yarn build`` - build application into `/dist` directory

``yarn build:clean`` - remove prev `/dist` and build application

``yarn serve`` - serve `/dist` directory. Requires build application before run

``yarn lint:js`` - run eslint

``yarn lint:css`` - run stylelint

``yarn lint:all`` - run eslint and stylelint concurrently

``yarn test`` - run jest

``yarn test:coverage`` - jest coverage

``yarn test:watch`` - jest in watch mode

``yarn analyze`` - analyze webpack bundle

______________________________

[LICENSE](https://github.com/JincorTech/frontend-moon-wallet/blob/develop/LICENSE) @ [secret_tech](http://secrettech.io/)


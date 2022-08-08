# To-Do App
## Symfony / React

A small To-do App builded in React and Symfony

## Installation

After cloning the repo, open a terminal and run :

```sh
cd TodoReactSymfony
# install node modules with npm :
npm install
# or with yarn :
yarn install
# Install symfony dependencies
composer install
# After runing this command you should build assets :
# with npm :
npm run build
# with yarn :
yarn run build
```

When you finished, you have to set your database info in .env file or create a new .env.local
```dotenv
###> doctrine/doctrine-bundle ###
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7&charset=utf8mb4"
###< doctrine/doctrine-bundle ###
```

## Tech

- [ReactJS] - a good js framework !
- [Symfony] - awesome PHP framework
- [Material UI] - An easy way to make React components

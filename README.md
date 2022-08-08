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

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [ReactJS] - a good js framework !
- [Symfony] - awesome PHP framework
- [Material UI] - An easy way to make React components

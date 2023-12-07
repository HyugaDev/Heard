# HEARD Assessment - Node with Prisma

This is a Backend server that allows users to add, update and delete transactions. It is built using NodeJS and Prisma.

## Functionality

With the HEARD Assessment, you can perform the following actions:

1. Add a transaction
   - Validation:
     - Title, Amount, Description, To Account and From Account are required.
     - To Account and From Account cannot be same.
2. Update a transaction
     - To Account and From Account cannot be same.
3. Delete a transaction

## How to Start

#### ( **Important** : Node version is v21.4.0)

To get started with the HEARD app, please follow the instructions below:

1. Clone the repository from the github by following command

```
git clone https://github.com/HyugaDev/Heard
```

2. Navigate to the project directory using your command prompt or terminal.
3. Run the command `yarn install` to install all necessary dependencies.

```ssh
yarn install
```

4. Run the command to copy the .env.example file to .env

```ssh
cp .env.example .env
```
5. Change the DATABASE_URL variable to your postgres database url in the ".env" file
it will look something like this
```ssh
"postgresql://{user name}:{password}@localhost:{database port}/{database name}?schema=public"
```
6. Run the command npm start to start the server.

```ssh
npm run start-server
```

7. The server will start running on http://localhost:3002.



## Tech stack

The tech stack used to build the HEARD backend is:

1. Node JS - to create server-side web applications
2. Prisma - helps developers read and write data to the database in an intuitive, efficient and safe way
3. JOI- allows us to create blueprints of Javascript objects that ensure that we process and ultimately accept accurate data

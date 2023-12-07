# HEARD Assessment - REACT with Formik

This is a Frontend application that allows users to interact with backend to add, display, update and delete transactions. It is built using React JS and Formik.

## Functionality

With the HEARD Assessment, you can perform the following actions:

1. Add a transaction
   - Validation:
     - Toaster will appear with the response message
     - Title, Amount, Description, To Account and From Account are required.
     - To Account and From Account cannot be same.
2. Update a transaction
     - Toaster will appear with the response message
     - Title, Amount, Description, To Account and From Account are required.
     - To Account and From Account cannot be same.
3. Delete a transaction
     - Toaster will appear with the response message
     - Confirmation popup for the deletion of transaction.

## How to Start

#### ( **Important** : React version is v18.2.0)

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
5. Change the server_url variable like following:
```ssh
  "http://localhost:3002"
```
6. Run the command npm start to start the server.

```ssh
npm run start-client
```

7. The server will start running on http://localhost:3000.



## Tech stack

The tech stack used to build the HEARD Frontend is:

1. React JS - allow developers to create fast user interfaces for websites and applications alike easily
2. Formik - building and processing form data in React applications
3. Yup- a JavaScript schema builder for validating or parsing values

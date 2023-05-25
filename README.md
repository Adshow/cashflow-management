# Cash flow management

A merchant needs to manage their daily cash flow with transactions (debits and credits) and also requires a report that provides the consolidated daily balance.

## Installation

Install the project using npm

```bash
  npm install
```

Install database using Docker

```bash
docker run --name mongodb -p 27017:27017 -d mongo
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_NAME`
`DB_HOST`
`DB_PORT`

## Running the Project

Run the project

```bash
  npm start
```

## Running the Tests

To run the tests, execute the following command

```bash
  npm test
```

## Stack

**Back-end:** Node, Express, Jest, Docker, MongoDB

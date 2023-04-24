# Twilindar

Twilindar is a full-stack web application that allows users to schedule tweets and threads on Twitter. The application is built using React JS for the frontend and ExpressJS for the backend.

## Features

- Schedule tweets to be posted at a specific date and time
- Compose and schedule Twitter threads
- Preview tweets and threads before scheduling
- View and manage scheduled tweets and threads
- Responsive design for optimal user experience on various devices

## Tech Stack

- Frontend: React JS
- Backend: ExpressJS
- API: Twitter API
- Authentication: OAuth 1.0

## Getting Started

Follow these steps to set up the Twilindar project locally:

### Prerequisites

1. Node.js (version 14.x or higher)
2. npm (version 7.x or higher)
3. A Twitter Developer Account with an approved Twitter App and API keys

### Installation

1. Clone the repository:

```bash 
git clone https://github.com/archie252000/Twilindar.git
```


2. Install the required dependencies for the server:

```bash
cd Twilindar/server
npm install
```


3. Create a `default.json` file in the `config` directory of the server and populate it with your Twitter API credentials and encryption keys (last three fields):

```json
{
  "mongoUri": "<your_mongo_uri>",
  "consumer_key": "<your_consumer_key>",
  "consumer_key_secret": "<your_consumer_key_secret>",
  "key_1_enc": "<your_key_1_enc>",
  "key_2": "<your_key_2>",
  "key_iv": "<your_key_iv>"
}
```
4. Install the required dependencies for the client:
```bash
cd ../client
npm install
```
5. Start both the server and client development servers:
```bash
// In the server directory
cd ../server
npm run dev

// In the client directory (open a new terminal window or tab)
cd ../client
npm start

```

## Contributing

Contributions to the Twilindar project are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name (e.g., `fix-scheduling-issue`).
3. Make changes in the new branch.
4. Commit your changes.
5. Push your changes to your forked repository.
6. Create a pull request with a detailed description of the changes.

Please follow the code style guidelines and ensure that your changes don't introduce new issues.

## Acknowledgements

- [Twitter API](https://developer.twitter.com/en/docs)
- [React JS](https://reactjs.org/)
- [ExpressJS](https://expressjs.com/)

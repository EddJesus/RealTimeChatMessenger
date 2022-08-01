<!--
repo name: RealTimeChatMessenger
description: Project developed to pass a code test
github name: EddJesus
link: https://github.com/EddJesus/RealTimeChatMessenger
logo path: client/public/logo.png
twitter: https://twitter.com/EdJesuus
email: edusanto22@gmail.com
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/EddJesus/RealTimeChatMessenger">
    <img src="client/public/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h2 align="center">
    RealTimeChatMessenger
  </h2>
    <p align="center">
      <a href="https://github.com/EddJesus/RealTimeChatMessenger/issues">Report Bug</a>
      �
      <a href="https://github.com/EddJesus/RealTimeChatMessenger/issues">Request Feature</a>
    </p>

</p>

<!-- TABLE OF CONTENTS -->

# Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Installation - Server](#installation-server)
  - [Installation - Client](#installation-client)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<br><br>

<!-- ABOUT THE PROJECT -->

# About The Project

This project is a chat messenger built to handle multiple logged users in a WebSocket Server.

I developed this during a coding test week when I was applying to an opportunity in an USA Company.

<br><br>

# Built With

Server-side:

- [express](https://expressjs.com/pt-br/)
- [postgres](https://www.postgresql.org/)
- [docker](https://www.docker.com/)
- [socket.io](https://socket.io/)
- [chai](https://www.chaijs.com/)
- [mocha](https://mochajs.org/)

Client-side:

- [react](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [material-ui](https://mui.com/pt/)

<br><br>

<!-- GETTING STARTED -->

# Getting Started

## Prerequisites

- Have node and npm on your machine
- Have docker or have postgres on your machine

<br>

## Installation

### 1. Run

```
git clone git@github.com:EddJesus/RealTimeChatMessenger.git RealTimeChatMessenger
```

<br>

## Installation-Server

### 1. Run

```
cd server
```

<br>

### 2. Run

```
npm install
```

<br>

### 3. create a `.env` using the `.env.example` and your own credentials (OBS: you must set PORT as 3001)

<br>

### 4. create a `.env.db` using the `.env.db.example` and your own credentials

<br>

### 5. You can choose 5.1 or 5.2 way

5.1 run a postgres locally on your machine:

OR:

5.2 use docker:

```
sudo docker-compose up
```

<br>

### 6. Run

```
npm run seed
```

<br>

### 7. Run

```
npm run dev
```

<br>

## Installation-Client

### 1. Run

```
cd client
```

<br>

### 2. Run

```
npm install
```

<br>

### 3. Run

```
npm start
```

<br>

<!-- CONTRIBUTING -->

## Usage

After running the server and the client correctly, just open the client and there you must know what to do 😉! Play!

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<br>

<!-- CONTACT -->

## Contact

[LinkedIn](https://www.linkedin.com/in/dev-eduardo-jesus/)

# Asciify Images

Asciify Images is a web application that converts images into ASCII art. It utilizes Node.js for the backend, React with Vite for the frontend, and Docker for containerization.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Asciify Images is a project aimed at providing a simple yet powerful tool for converting images into ASCII art. With a user-friendly interface and efficient backend processing, users can upload images and instantly generate ASCII representations of them.

## Features

- Upload images for conversion into ASCII art
- Real-time preview of ASCII art
- Download ASCII art images
- Dockerized for easy deployment and scalability

## Installation

To run the project locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Ensure you have Docker installed on your system.
4. Run the following commands:
   - `cd api; npm i; cd ..; cd app; npm i; cd ..`
   - `docker-compose up`

## Usage

Once the containers are up and running, you can access the application as follows:

- Frontend: Navigate to `http://localhost:8000` in your web browser.
- Backend API: Access the API endpoints at `http://localhost:3000`.

## Technologies Used

### Frontend

- React
- Vite
- useLocalStorage
- Axios

### Backend

- Node.js
- Express
- Express-fileupload
- AsciifyImage

## Contributing

Contributions to Asciify Images are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

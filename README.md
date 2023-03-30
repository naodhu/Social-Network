# NoSQL Challenge: Social Network API

![Social Network API Banner](banner.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The **NoSQL Challenge: Social Network API** is a robust and scalable API designed for a modern social network application. Built with cutting-edge technologies and utilizing the flexibility and performance of NoSQL databases, it provides a reliable and efficient backend for any social network project.

## Features
- User registration and authentication
- CRUD operations for user profiles
- Adding and removing friends
- Creating, updating, and deleting posts
- Commenting on and reacting to posts
- Pagination and filtering for efficient data retrieval

## Technologies
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

## Requirements
- Node.js v14.x or higher
- MongoDB v5.x or higher
- npm v7.x or higher

## Installation
1. Clone the repository:

- git clone https://github.com/yourusername/social-network-api.git
- cd social-network-api

2. Install the dependencies:

3. Create a `.env` file in the root directory and configure the following variables:
- MONGODB_URI=mongodb://localhost:27017/social-network
- JWT_SECRET=your_jwt_secret_key
- PORT=3000

4. Start the server:


## Usage
To interact with the API, you can use tools like Postman or Curl. The API documentation with all available endpoints and their respective requests/responses can be found [here](API_DOCS.md).

## Demo
A live demo of the API is available at: [https://social-network-api-demo.herokuapp.com](https://social-network-api-demo.herokuapp.com)

## Screenshots
![User Registration](screenshots/user-registration.png)
![Add Friend](screenshots/add-friend.png)
![Create Post](screenshots/create-post.png)
![Comment on Post](screenshots/comment-on-post.png)

## Contributing
We welcome contributions from the community. To get started, please fork the repository, create a new branch for your changes, and submit a pull request once your changes are complete and tested.

## License
This project is licensed under the MIT License. For more information, please refer to the [LICENSE](LICENSE) file.


# NoSQL Challenge: Social Network API

![social-net-solution_icon6](https://user-images.githubusercontent.com/113915529/228991431-569833c3-27bf-424c-901a-66d4262aab52.svg)


# API for Social Networking Platform

## Overview

This project aims to develop an API for a social media application, enabling users to:

- Create, edit, and delete user accounts
- Compose, modify, and remove posts 
- Organize and maintain a list of contacts
- Interact with friends' posts 

The application will store data in MongoDB, utilizing Mongoose for database operations.

**Additional Feature**: When a user account is removed, all corresponding posts will be deleted from the Post collection as well.

## Useful Links

- [Video Demonstration]()
- [GitHub Repository]()

## Table of Contents

1. [Installation](#installation)
2. [Technologies Employed](#technologies-employed)
3. [Instructions for Use](#instructions-for-use)

## Installation

The following npm packages are required to run the application:

- `express` v4.18.2
- `mongoose` v6.9.2
- `nodemon` v2.0.22 (optional)

Install the necessary libraries by executing this command in the root directory:

```bash
npm install
```

Please note that `nodemon` is referenced in the talkthrough but not included in the video demonstration. To utilize `nodemon`, install the library separately.

## Technologies Employed

- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia

## Instructions for Use

Before exploring the API routes with Insomnia, launch the server using one of these commands in your preferred command-line interface:

```bash
npm start
```



To examine the API routes, apply the following endpoints:

### Account and Contacts

- GET all accounts: `/api/users`
- GET account by userId: `/api/users/:userId`
- POST (create) new account: `/api/users`
- PUT (edit) account by userId: `/api/users/:userId`
- DELETE account by userId: `/api/users/:userId`
- POST add contact to account: `/api/users/:userId/friends/:friendId`)
- DELETE contact from account's list: `api/users/:userId/friends/:friendId`

### Post and Interaction

- GET all posts: `/api/thoughts`
- GET post by thoughtId: `/api/thoughts/:thoughtId`
- POST (create) new post: `/api/thoughts`
- PUT (edit) post by thoughtId: `/api/thoughts/:thoughtId`
- DELETE post by thoughtId: `/api/thoughts/:thoughtId`
- POST add interaction to post: `/api/thoughts/:thoughtId/reactions`
- DELETE interaction from post's list: `/api/thoughts/:thoughtId/reactions/:reactionId`



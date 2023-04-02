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

- [Video Demonstration](https://drive.google.com/file/d/1OMxufnhKiMKmHG6DrOn8T41RHa73WXCv/view?usp=sharing)
- [GitHub Repository](https://github.com/naodhu)


## Demo

https://user-images.githubusercontent.com/113915529/229328511-4495d67a-a592-458f-8082-0fbc72336a4f.mp4







## Table of Contents

1. [Installation](#installation)
2. [Technologies Employed](#technologies-employed)

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





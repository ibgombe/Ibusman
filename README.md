[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# User Manager

This repository contains a simple demo API built with NodeJS.
The API is used to manage users in a MongoDB database.

### Development
This application was developed using [ExpressJS](http://expressjs.com/). MongoDB was used for persisting data with [Mongoose](https://mongoosejs.com/) as [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping).

### Installation
* Start up your terminal (or Command Prompt on Windows OS).
* Ensure that you've `node` installed on your PC.
* Clone the repository by entering the command `git clone https://github.com/Ibrahim-Usman/assessment` in the terminal.
* Navigate to the project folder using `cd assessment` on your terminal (or command prompt)
* After cloning, install the application's dependencies with the command `npm install`.
* Create a `.env` file in your root directory as described in `.env.sample` file. Variables such as DB_URL (which must be a mongoDB URL) and PORT are defined in the .env file and it is essential you create this file before running the application.
```
PORT=3000
DB_URL='mongodb://localhost:27017/UserManager'
```
* After this, you can then start the server with the command: `npm start`.

### Testing
To ensure that your installation is successful you'll need to run tests.
The command: `npm test` makes this possible. It isn't functional right now, but once it's done you'll be notified via the README.

###Install Docker for Windows
1. Double-click Docker for Windows Installer.exe to run the installer.
If you haven’t already downloaded the installer (Docker for Windows Installer.exe), you can get it from download.docker.com. It typically downloads to your Downloads folder, or you can run it from the recent downloads bar at the bottom of your web browser.
2. Follow the install wizard to accept the license, authorize the installer, and proceed with the install.
You will be asked to authorize Docker.app with your system password during the install process. Privileged access is needed to install networking components, links to the Docker apps, and manage the Hyper-V VMs.
3. Click Finish on the setup complete dialog to launch Docker.

Start Docker for Windows
Docker will not start automatically. To start it, search for Docker, select the app in the search results, and click it (or hit Return).
You should be able to run docker run hello-world and see a response like this:
docker run UserManager

Run docker --version to check it’s version.
$ docker --version

Run docker stack deploy -c docker-compose.yml getstartedlab

### API Documentation
The API only has one endpoint which is the `/users` endpoint for saving users to the database. The endpoint works with the HTTP verbs: `POST`, `GET`, `PUT`, `DELETE`.

###### POST HTTP Request
-   `POST` /users
-   INPUT:
```x-form-url-encoded
name: ibrahim
email: igbabayogmail.com
password: ibgusman
```

###### HTTP Response

-   HTTP Status: `201: created`
-   JSON data
```json
{
  "_id": "59071791b0lkscm2325794",
  "name": "ibrahim",
  "email": "igbabayo@gmail.com",
  "password": "ibgusman",
  "__v": 0
}
```

###### GET HTTP Response
-   `GET` /users

```json
[
    {
        "_id": "59071791b0lkscm2325794",
        "name": "ibrahim",
        "email": "igbabayo@gmail.com",
        "password": "ibgusman",
        "__v": 0
    }
]
```

###### GET HTTP Response
-   `GET` /users/:id

```json
{
    "_id": "59071791b0lkscm2325794",
    "name": "ibrahim",
    "email": "igbabayo@gmail.com",
    "password": "",
    "__v": 0
}
```

###### DELETE HTTP Response
-   `DELETE` /users/:id

```json
User Ibrahim Usman was deleted
```

###### POST HTTP Request
-   `PUT` /users/:id
-   INPUT:
```x-form-url-encoded
name: ibrahim usman
email: igbabayo@gmail.com
password: ibgusman
```

###### HTTP Response

-   HTTP Status: `200: OK`
-   JSON data
```json
{
  "_id": "59071791b0lkscm2325794",
  "name": "ibrahim usman",
  "email": "igbabayo@gmail.com",
  "password": "ibgusman",
  "__v": 0
}
```



### Author
**Ibrahim Usman** 

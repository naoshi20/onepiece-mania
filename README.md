# ONEPIECE Database
> There are many fascinating characters in ONEPIECE.
> Don't you search your favorite characters or find interesting information? 
> Live demo [_comming soon_](). 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- I have ONEPIECE character database, because I made it about thee years ago. However, It is difficult for people to see and understand table data. So I thought it is a good chance to visually show data I gathered and neatned before.
- In terms of technology, I'm now interested in frontend development. I did not want to develop only frontend, but also backend, evenif it is simplified, and connect them by using API.


## Technologies Used
- MEAN Stack
	- MongoDB - v6.0
	- Express - v4.18.1
	- Angular - v14.1.1
	- Node.js - v17.0.1
- Heroku


## Features
List the ready features here:
- Display a list and details of characters


## Screenshots
![comming soon](./img/screenshot.png)


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.

### local environment
In project root, you should start angular app.
We use proxy server between client side and server side (see /proxy.conf.json)
`$ npm run start-dev`

In /server, you should start node server.
`$ node index.js`
### production environment
Before deployment 
1. In root, you have to build and make dist directory
`$ npm run build`
2. make MongoDB project and get connection string
3. copy and paste it in /server/config/prod.js
4. add connection string in Heroku configuration settings ad DB_URI
5. test connection with production DB in local environment replacing local DB_URI with prod's one
We use proxy server between client side and server side (see /proxy.conf.json)
`$ npm run start-dev`

In /server, you should start node server.
`$ node index.js`

initialize production database


## Usage
comming soon


## Project Status
Project is: _in progress_ 


## Room for Improvement

Room for improvement:
- comming soon

To do:
- comming soon


## Acknowledgements
Thanks for your greate course.
- [ONEPIECE Character Database](https://docs.google.com/spreadsheets/d/1izNZRVZvCMDpj7L0jAOUJj5_KcgCqnEP9mev0ZTuIi0/edit?usp=sharing) I created
- This project was based on [this tutorial](https://www.udemy.com/course/angular-nodejs-web/learn/lecture/16704950).


## Contact
Created by [@naoshi20](https://github.com/naoshi20) - feel free to contact me!

## Knowledge MEMO
### How to Debug Node server
In POSTMAN, select JSON format in BODY tag and input body request data (post request)

1. setup launch.js
‘‘‘
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/server/index.js"
    }
  ]
}
‘‘‘
2. click on debug point
3. start debug
4. send post request
5. watch variables in VScode or hover on source code

## UserResister Function
[WireFrame|https://wireframepro.mockflow.com/view/MWj50RkWgob]
[FlowChart|https://drive.google.com/file/d/1JKs8QQhZGXGycTOVwYmn1pQdY9NfY9Pa/view?usp=sharing]
[OpenApi(Swagger)|https://app.swaggerhub.com/apis-docs/NAOSHISTPAUL/CreateUser-onepiecemania/1.0.0]

## UserLogin Function
[Image|img/jwt.png]

## get createve point
- hash password (bcrypt)
- (JWT)

## Installed Modules
- body-parser
- bcrypt
- jsonwebtoken
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Requirements
The frontend portion of the project is built in React connecting to the backend container using a defined network in the .env file of both the frontend and backend. 

Docker can be downloaded [here](https://docs.docker.com/get-docker/) (https://docs.docker.com/get-docker/)

# Cloning the Repo
To clone this repo using SSH run:
```
git clone git@github.com:lpyeates/rideco-coding-assignment-frontend.git
```

To clone this repo using HTTPS run:
```
git clone https://github.com/lpyeates/rideco-coding-assignment-frontend.git
```


# Running the Frontend

1. run 
```
docker-compose build
```

2. run 
```
docker-compose up
```

Alternatively you can simply run 
```
docker-compose up --build
```

For instructions to run the backend of the app go to https://github.com/lpyeates/rideco-coding-assignment-backend

Once both the frontend and backend are built and running go to http://localhost:3000/ to access the app.

To tear down the backend run
```
docker-compose down
```


# Running Tests
The frontend has some preliminary tests started. However they are currently not working as mocking the axios request is causing them to break before
functionality is tested. The inital work can still be seen and run following the instructions below. They may be fixed later.

To run the test:

1. run 
```
docker-compose up --build
```

2. run 
```
docker exec -it rideco_assignment-frontend-1 /bin/sh
```

3. run 
```
npm test
```


# Discussion and Future Improvements
The discussion and future improvements for this project can be found in [this google doc](https://docs.google.com/document/d/1UMJDG1lhtA7Hph7IAL4eU8Huo4hCqmskWL2pH5nu8FE/edit?usp=sharing). (https://docs.google.com/document/d/1UMJDG1lhtA7Hph7IAL4eU8Huo4hCqmskWL2pH5nu8FE/edit?usp=sharing)

It covers many points from:
- weaknesses, and steps taken to complete project in time deadline
- Design documentation
- Future areas for improvement in both infrastructure and features

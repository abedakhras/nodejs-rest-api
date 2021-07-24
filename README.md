# nodejs-rest-api
small NodeJS based service \ backend that allows us to manage users via REST API, the service should interact with an SQL DB.
in the project there is a basic player model named -> user
# The most important commands:

|#   |   command  | description |
|----|------------|-------------|
| 1. | docker-compose up| To deploy the project and run the api-rest application|
| 2. | docker-compose run app npm run coverage | after we deploy the application we open another bash or cmd terminal and run the unit test |
# Availabe service paths
|#   |   path  | method| description |
|----|------------|--|-------------|
| 1. | http://localhost:8080/api/user| GET | API for fetching all users|
| 2. | http://localhost:8080/api/user| POST | This function used to create new user|
| 3. | http://localhost:8080/api/user| DELETE | This function used to delete user by Id|

# Swagger API UI
|#   |   path  | method| description |
|----|------------|--|-------------|
| 1. | http://localhost:8080/api-docs/ | GET | UI for Node Rest API documentation|
# A user has the following fields:


|#   |   field  |  type         |
|----|----------|----------------
| 1. |	Id     | auto generated |
| 2. |	Name   | String         |
| 3. |	Email  | String         |
| 4. |	password | String       |


# The service should facilitate the following operations:

| # | function | descrition | Http request method|
|---|----------|------------|----|
| 1. | createUser | create new user in the database | POST
| 2. | getAllUsers | retirive all users | GET |
| 3. | deleteUser | delete specific user from the table by id |DELETE|
# The API-REST service documented using OpenAPI SWAGGER.
<img src="https://github.com/abedakhras/nodejs-rest-api/blob/master/images/postman4.png?raw=true" width="100%" />

# The service have unit tests with a minimum of 10% test coverage using package nyc istanbul mocha version.
the unit test exist at this path: **test\user.test.js**
there is tow function for checking the retirve and create users.
<img src="https://github.com/abedakhras/nodejs-rest-api/blob/master/images/postman5.png?raw=true" width="100%" />

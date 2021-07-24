# nodejs-rest-api
small NodeJS based service \ backend that allows us to manage users via REST API, the service should interact with an SQL DB.
in the project there is a basic player model named -> user

## A user has the following fields:


|#   |   field  |  type         |
|----|----------|----------------
| 1. |	Id     | auto generated |
| 2. |	Name   | String         |
| 3. |	Email  | String         |
| 4. |	password | String       |


## The service should facilitate the following operations:

| # | function | descrition | Http request method|
|---|----------|------------|----|
| 1. | createUser | create new user in the database | POST
| 2. | getAllUsers | retirive all users | GET |
| 3. | deleteUser | delete specific user from the table by id |DELETE|

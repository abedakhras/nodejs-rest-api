const userService = require('../service/userService')
const constants = require('../constants');

module.exports.createUser = async(req, resp) => {
    let response = {};
    try {
        const reponseFromService = await userService.createUser(req.body)
        response.status = 201
        response.message = "User Created Successfully";
        response.body = reponseFromService
    } catch (error) {
        console.log('something went wrong: controller: create User ', error)
        response.status = 400
        response.message = error.message;
        response.body = {}
    }
    return resp.status(response.status).send(response)
}
module.exports.getAllUsers = async(req, resp) => {
    let response = {}
    try {
        const responseFromService = await userService.getAllUsers(req.query);
        response.status = 200;
        response.message = "Message";
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getAllUsers', error);
        response.message = error.message;
    }
    return resp.status(response.status).send(response);
}
module.exports.deleteUser = async(req, resp) => {
    let response = {...constants.defaultServerResponse };
    try {
        const responseFromService = await userService.deleteUser(req.params);
        response.status = 200;
        response.message = constants.userMessage.USER_DELETED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: deleteProduct', error);
        response.message = error.message;
    }
    return resp.status(response.status).send(response);
}
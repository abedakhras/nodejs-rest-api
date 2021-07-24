const { formatMongoData, checkObjectId } = require('../helper/dbHelper');
const User = require('../database/models/userModel')
const constants = require('../constants');

module.exports.createUser = async(ServiceData) => {
    try {
        let user = new User({...ServiceData })
        return await user.save()
    } catch (error) {
        console.log("Something went wrong: service create User", error)
        throw new Error(error)
    }
}
module.exports.getAllUsers = async({ skip = 0, limit = 10 }) => {
    try {
        let users = await User.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(users);
    } catch (error) {
        console.log('Something went wrong: Service: getAllusers', error);
        throw new Error(error);
    }
}
module.exports.deleteUser = async({ id }) => {
    try {
        checkObjectId(id);
        let user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        return formatMongoData(user);
    } catch (error) {
        console.log('Something went wrong: Service: deleteuser', error);
        throw new Error(error);
    }
}
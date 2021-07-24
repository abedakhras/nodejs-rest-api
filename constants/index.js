module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    userMessage: {
        USER_CREATED: 'USER Created Successfully',
        USER_FETCHED: 'USER Fetched Successfully',
        USER_UPDATED: 'USER Updated Successfully',
        USER_DELETED: 'USER Deleted Successfully',
        USER_NOT_FOUND: 'USER Not Found'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields',
        TOKEN_MISSING: 'Token missing from header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}
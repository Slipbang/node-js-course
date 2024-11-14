const getUsersHandler = (req, res) => {
    res.send('Get users route');
}

const postUsersHandler = (req, res) => {
    res.send('Post user route');
}

const getSingleUserHandler = (req, res) => {
    res.send(`Get single user route. userId ${req.params.userId}`);
}

module.exports = {
    getSingleUserHandler,
    getUsersHandler,
    postUsersHandler,
}

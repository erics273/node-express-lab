const users = [
    {
        id: 1,
        firstName: "eric",
        lastName: "Schwartz"
    },
    {
        id: 2,
        firstName: "bob",
        lastName: "Smith"
    },
    {
        id: 3,
        firstName: "Susan",
        lastName: "McCaskill"
    }
]

const userController = {

    getAllUsers: function (req, res) {
        res.json(users)
    },

    findById: function (req, res) {

        const foundUser = users.find((user) => user.id === parseInt(req.params.id))

        //if we found the user return it otherwise return a 404
        if (foundUser) {
            res.json(foundUser)
        } else {
            res.sendStatus(404)
        }
    },

    addUser: function(req, res){
        //push the new user into the users array
        users.push(req.body)

        //respond back with the proper status code (201 created) and the JSON that represents the creted resource
        res.status(201).json(req.body)
    },

    deleteUser: function (req, res) {

        const foundUserIndex = users.findIndex((user) => user.id === parseInt(req.params.id))

        //if we found the user return it otherwise return a 404
        if (foundUserIndex !== -1) {
            users.splice(foundUserIndex, 1);
            res.json(users)
        } else {
            res.sendStatus(404)
        }
    },

    updateUser: function (req, res) {

        let foundUser = users.find((user) => user.id === parseInt(req.params.id))

        //if we found the user return it otherwise return a 404
        if (foundUser) {
            foundUser = Object.assign(foundUser, req.body)
            res.json(foundUser);
        } else {
            res.sendStatus(404)
        }
    }

}

module.exports = userController;
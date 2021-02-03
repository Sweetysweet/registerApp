const { model } = require('mongoose')

const getUsers = async (req, res) => {
    try {
        const usersModel = model('User')
        const users = await usersModel.find({}).lean()
        
        res.send(users).status(200)

    } catch (e) {
        console.log(e.message);
    }
}


module.exports = {
    getUsers
}
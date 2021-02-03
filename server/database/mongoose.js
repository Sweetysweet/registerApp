const mongoose = require('mongoose')

const mongooseInit = callback => {
    mongoose.connect('mongodb+srv://sweety:fullno20d@cluster0.hkcxd.mongodb.net/ladder?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        async err => {
            if (err) console.log(err)
            console.log('connect to DB successfull');
            if (callback) callback()
        })
}

module.exports = mongooseInit

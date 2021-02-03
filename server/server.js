const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongooseInit = require("./database/mongoose")

const corsOptions = {
    origin: ['http://localhost:8080'],
    optionsSuccessStatus: 200
}

const router = express.Router()

const authController = require('./controllers/auth')
const allUsersController = require('./controllers/users')

app.use(cors(corsOptions))
mongooseInit()
app.use('/', router)
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/auth',
    // [
    //     check('username', 'Пользователь с таким именем уже существует'),
    //     check('password', 'Минимальная длинна пароля 6 символов').isLength({ min: 6 })
    // ],
    authController.register)

router.get('/users', allUsersController.getUsers)
app.listen(3000, () => {
    console.log('server listening port...', 3000);
})
require("dotenv").config();
const User = require('../database/schemas/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Ошибка при регистрации'   
            })
        }
        const { user } = req.body.data
        const { username, password } = user
        const isUserExist = await User.findOne({ username })
        if (isUserExist) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const userData = new User({ username, password: hashedPassword })
        console.log('пользватель зарегистрирован: ', userData);

        await userData.save()

        res.send({ type: 'success', data: { user } }).status(200)
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
}

// const login = async (res, req) => {
//     try {
//         const errors = validationResult(req)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors: errors.array(),
//                 message: 'Ошибка при входе в систему'
//             })
//         }
//         const { user } = req.body.data
//         const { username, password } = user
//         const isUserExist = await User.findOne({ username })
//         if (!isUserExist) {
//             return res.status(400).json({ message: 'Пользователя не существует' })
//         }
//         const isMatchPasswords = await bcrypt.compare(password, isUserExist.password)
//         if (!isMatchPasswords) {
//             return res.status(400).json({ message: 'Не верный логин или пароль' })
//         }
//         const token = jwt.sign(
//             { userId: user._id },
//             process.env.jwtSecret.get('jwtSecret'),
//             { expiresIn: '1h' }
//         )

//         res.json({ token, userId })

//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ message: 'Что-то пошло не так' })
//     }
// }

module.exports = {
    register,
    // login
}
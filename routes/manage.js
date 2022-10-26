const express = require('express')
const jwt = require('jsonwebtoken')
const sha256 = require('sha256')
const path = require('path')
const multer = require('multer')
const authorization = require('../utils/jwt-verify')
const getLocation = require('../utils/getLocation')
const getUserAgent = require('../utils/getUserAgent')
const { upload } = require('../mongo-db/connect-db')
const router = express.Router()
const Post = require('../models/post')

router.post('/p0st', authorization, async (req, res, next) => {
  console.log(req.body)
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       // A Multer error occurred when uploading.
//       res.status(500).send({ error: { message: `Multer uploading error: ${err.message}` } }).end()
//       return
//     } else if (err) {
//       // An unknown error occurred when uploading.
//       if (err.name === 'ExtensionError') {
//         res.status(413).send({ error: { message: err.message } }).end()
//       } else {
//         res.status(500).send({ error: { message: `unknown uploading error: ${err.message}` } }).end()
//       }
//       return
//     }

//     // Everything went fine.
//     // show file `req.files`
//     // show body `req.body`
//     console.log('Your files uploaded.')
//     res.status(200).end('Your files uploaded.')
//   })
})
// router.post('/sign-up', async (req, res, next) => {
//   const alertSignUpSuccessful = _ => {
//     next('Sign up unsuccessful!')
//     return res.json({ status: 500, message: 'Sign up unsuccessful!' })
//   }
//   const { username, password, confirmPassword, email } = req.body
//   if (password !== confirmPassword || sha256(password) !== sha256(confirmPassword) || !password || !confirmPassword || !username || !email) {
//     return alertSignUpSuccessful()
//   }

//   const location = getLocation(req.ip)
//   const currentDevice = getUserAgent()
//   const createAt = new Date()
//   try {
//     let isExistedUserBaseOnUsername, isExistedUserBaseOnEmail
//     try {
//       isExistedUserBaseOnUsername = await User.findOne({ username })
//       isExistedUserBaseOnEmail = await User.findOne({ email: sha256(email) })
//     } catch (err) {
//       return alertSignUpSuccessful()
//     }

//     if (isExistedUserBaseOnUsername || isExistedUserBaseOnEmail) {
//       return alertSignUpSuccessful()
//     }

//     const newUser = new User({
//       username,
//       password: sha256(password),
//       email: sha256(email),
//       location,
//       currentDevice,
//       createAt
//     })

//     const data = await newUser.save()
//     const { SECRET_JWT } = process.env
//     const response = {
//       ...data._doc,
//       password: undefined,
//       accessToken: jwt.sign({ username, email, location, currentDevice }, SECRET_JWT)
//     }
//     console.log(response)
//     sendWelcomeMsg(username, email, currentDevice)
//     return res.json(response)
//   } catch (err) {
//     return alertSignUpSuccessful()
//   }
// })

// router.post('/sign-in', async (req, res, next) => {
//   const alertSignInSuccessful = _ => {
//     next('Sign in unsuccessful!')
//     return res.json({ status: 500, message: 'Sign in unsuccessful!' })
//   }
//   const { username, password } = req.body
//   if (!password) {
//     return alertSignInSuccessful()
//   }

//   let existedUser
//   try {
//     existedUser = await User.findOne({ username, password: sha256(password) })
//   } catch (err) {
//     return alertSignInSuccessful()
//   }

//   if (!existedUser) {
//     return alertSignInSuccessful()
//   }

//   const { SECRET_JWT } = process.env
//   const location = JSON.stringify(getLocation(req.ip))
//   const currentDevice = getUserAgent()
//   try {
//     await User.findByIdAndUpdate({ _id: existedUser._id},
//       { $push: { location, currentDevice } },
//       { upsert: true, new: true }
//     )
//   } catch (err) {
//     console.log(err)
//     return alertSignInSuccessful()
//   }
//   const email = existedUser.email
//   existedUser = {
//     ...existedUser._doc,
//     password: undefined,
//     email: undefined,
//     accessToken: jwt.sign({ username, email, location, currentDevice }, SECRET_JWT)
//   }
//   console.log(existedUser)
//   return res.json(existedUser)
// })
module.exports = router

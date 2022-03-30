const User = require('../models/User')
const ApiError = require('../ApiError/ApiError')
const bcrypt = require('bcrypt')
const { check, validationResult } = require("express-validator");
const config = require('config')
const jwt = require("jsonwebtoken");

class userController {

  async registration  (req, res, next)  {
    try{
      
      const { first_name, last_name, login, password, role} = req.body

      const candidate = await User.findOne({login})

      if (candidate) {
        return res.status(201).json({ message: 'Пользователь с таким login ужа существует'})
      }

      const hashPassword = await bcrypt.hash(password, 5)
      const user = new User({first_name, last_name, login, password : hashPassword, role})

      await user.save() 

      res.status(201).json({login: true ,message: 'User created!!!'})

    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
      // console.log('error', e.message)
    }


      
  }

  async login (req, res, next) {
    try{
      
      const { login, password} = req.body
      
      
      const user = await User.findOne({login})

      if(!user){
        return next(ApiError.internal('Пользоватеь не найден'))
      }

      const isMatch = await bcrypt.compareSync(password, user.password)
      if (!isMatch) {
          return next(ApiError.internal('Wrong email and password'))
      }


      const token = jwt.sign(
        {userId : user.id}, 
        config.get('jwtSecret'),
        {expiresIn: '12h'}    
      )

      

    res.json({token, user})
      

    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async auth (req, res, next) {

  }

  async getAll (req, res, next) {
    try{
      const user = await User.find()      
      res.status(201).json(user)
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async update (req, res, next) {
    try{
      const {password, first_name, last_name, login, links, role} = req.body
      const hashPassword = await bcrypt.hash(password, 5)
           
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {first_name, last_name, login, password: hashPassword, role  }
      )    
      res.status(201).json({message: 'Updated successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async deleted (req, res, next) {
    try{
      const {id} = req.params
      const user = await User.findByIdAndDelete(
        req.params.id
      )    
      res.status(201).json({message: 'Deleted successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }



}

module.exports = new userController()
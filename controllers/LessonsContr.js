const Lesson = require('../models/Lessons')
const ApiError = require('../ApiError/ApiError')
const multer = require('multer');
const uuid = require('uuid')
const path = require('path')



class CategoryController {

  async create (req, res, next) {
    try{
      const {title, text, link, course} = req.body
      const obj = new Lesson({title, text, link, course})
      await obj.save()
      return res.status(201).json({message: "Successfuly created!"})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }
  

  async getAll (req, res, next) {
    try{
      const news = await Lesson.find()      
      res.status(201).json(news)
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async update (req, res, next) {
    try{
      const { title, text, link, course } = req.body
      const categ = await Lesson.findByIdAndUpdate(
        req.params.id,{title, text, link, course}
        )
      res.status(201).json({message: 'Updated successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async delete (req, res, next) {
    try{
      const {id} = req.params
      const news = await Lesson.findByIdAndDelete(
        req.params.id
      )    
      res.status(201).json({message: 'Deleted successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }



}

module.exports = new CategoryController()
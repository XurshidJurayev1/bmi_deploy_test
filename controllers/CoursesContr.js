const Courses = require('../models/Courses')
const ApiError = require('../ApiError/ApiError')
const multer = require('multer');
const uuid = require('uuid')
const path = require('path')



class CoursesController {

  async create (req, res, next) {
    try{
      const {title, text, link, owner, category_id} = req.body


      const candi = await Courses.findOne({title})

      if(candi) {
        return res.status(201).json({message: `${title} ужа существует`})
      }

      const obj = new Courses({title, text, link, owner, category_id})


      await obj.save()

      return res.status(201).json({message: "Successfuly created!"})


    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так')) 
    }
  }
  

  async getAll (req, res, next) {
    try{
      const news = await Courses.find()      
      res.status(201).json(news)
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async update (req, res, next) {
    try{
      const { title, text, link, owner, category_id } = req.body

      const condi = await Courses.findOne({title})

      if(condi) {
        return res.status(201).json({message: `${name} ужа существует`})
      }

      const categ = await Courses.findByIdAndUpdate(
        req.params.id,{title, text, link, owner, category_id}
        )
      res.status(201).json({message: 'Updated successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async delete (req, res, next) {
    try{
      const {id} = req.params
      const news = await Courses.findByIdAndDelete(
        req.params.id
      )    
      res.status(201).json({message: 'Deleted successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }



}

module.exports = new CoursesController()
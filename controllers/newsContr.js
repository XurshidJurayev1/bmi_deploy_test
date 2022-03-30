const News = require('../models/News')
const ApiError = require('../ApiError/ApiError')



class newsController {

  async create (req, res, next) {
    try{
      console.log('working try')

      const {title, content, link} = req.body

      console.log(title)
      const {file} = req.file

      console.log(req.file.path)
      const news = await News({title, content, link, image_path : file.image_path, image_name: file.filename })
      
      const nnNews = await news.save()

      if (nnNews) {
        return res.json({ message: `${nnNews} был создон` });
    } else {
        return res.json({ message: "Ошибка гдето!" });
    }

    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }
  

  async getAll (req, res, next) {
    try{
      const news = await News.find()      
      res.status(201).json(news)
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async update (req, res, next) {
    try{
    

      res.status(201).json({message: 'Updated successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }

  async delete (req, res, next) {
    try{
      const {id} = req.params
      const news = await News.findByIdAndDelete(
        req.params.id
      )    
      res.status(201).json({message: 'Deleted successfully!'})
    }catch (e){
      return next(ApiError.badRequest('Что-то пошло не так'))
    }
  }



}

module.exports = new newsController()
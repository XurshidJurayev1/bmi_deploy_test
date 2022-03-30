const express = require('express')
const config = require('config')
const errorHandling = require('./middleware/ErrorHandlingMiddleware')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', router)

// error Handler
app.use(errorHandling)

const PORT = config.get('port') || 5000

async function run () {
  try{
    await mongoose.connect(config.get('mongoURL'), {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology : true ,
      
    })
    app.listen(PORT, () => console.log(`App successfuly started on ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
  
}

run()






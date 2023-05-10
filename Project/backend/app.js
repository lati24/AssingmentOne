const express = require("express");

const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')

require('./db')
const authRouter = require('./Routes/auth')


require('dotenv').config();

app.use(helmet())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/auth', authRouter)



//function to listen to port                                                                                                                                                
app.listen(5000,() => {console.log("server is running on port 5000")})




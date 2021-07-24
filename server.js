const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml')
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()

// connect to database
dbConnection()

//cors
app.use(cors())

// request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', require('./routes/userRoutes'))

// API Decumentation
if (process.env.NODE_ENV != 'PRODUCTION') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get('/', (req, res, next) => {
    res.send('Hello from Node Server')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listenning on PORT ${PORT}`)
})

// error handler middleware

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {

        }
    })
})
import express from 'express'
import { auth, home } from '../controllers'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const router = express.Router()

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Documentation'
    },
  },
  apis: ['./src/routes/api.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

/**
 * Init all routes
 */

const initRoutes = (app) => {
  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

  router.get('/', home.getHome)

  router.get('/login-register', auth.loginRegistry)

  return app.use('/', router)
}

export default initRoutes

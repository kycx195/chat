import express from 'express'
import { home, auth } from '../controllers'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger-output.json'

const router = express.Router()


/**
 * Init all routes
 */

const initRoutes = (app) => {

  router.get('/', () => {
    /* 
     #swagger.tags = ['Home']
     #swagger.responses[200] = {
           description: 'User successfully obtained.',
           schema: { $ref: '#/definitions/User' }
      } 
   */
    home.getHome
  })

  router.get('/login-register', () => { 
    // #swagger.tags = ['Home']
    auth.loginRegistry
  })

  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  return app.use('/', router)
}

export default initRoutes

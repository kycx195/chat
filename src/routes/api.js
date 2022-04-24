import express from 'express'
import { home, auth } from '../controllers'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger-output.json'
import { signupValidation } from '../validations'
import { validate } from '../common'

const router = express.Router()


/**
 * Init all routes
 */

const initRoutes = (app) => {

  router.get('/', home.getHome)

  router.post('/register', validate(signupValidation), auth.registry)

  router.get('/create-admin', auth.createAdmin)

  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  return app.use('/', router)
}

export default initRoutes

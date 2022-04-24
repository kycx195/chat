import { body } from 'express-validator'
import validation from '../lang/validation.vi'
import User from '../models/user.model'
import { CODES } from '../common'

export const signupValidation = [
  body('local.email').trim().not().isEmpty().withMessage(validation.email.required)
    .isEmail().withMessage(validation.email.isEmail)
    .custom(async (value, { req }) => {
      const user = await User.findOne({ 'local.email': value })
      if (user) throw new Error()
    }).withMessage({
      message: validation.email.isExisted,
      errorCode: CODES.EXISTED_USER
    }),
  body('local.password').trim().not().isEmpty().withMessage(validation.password.required)
    .isLength({ min: 6 }).withMessage(validation.password.minLength),
]

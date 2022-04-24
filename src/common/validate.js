import { validationResult } from 'express-validator'

export const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json(
      errors.array({ onlyFirstError: true }).map(({ msg }) => ({
        errorCode: msg.errorCode || 4000,
        message: msg.message || msg,
      }))[0]
    );
  }
}

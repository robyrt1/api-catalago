import * as defaultJoi from '@hapi/joi';
import * as joiDate from '@joi/date';

const joi = defaultJoi.extend(joiDate);

export const userAuthJwtJoiSchema = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().required(),
});

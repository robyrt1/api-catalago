import * as defaultJoi from '@hapi/joi';
import * as joiDate from '@joi/date';

const joi = defaultJoi.extend(joiDate);

export const createMovieJoiSchema = joi.object().keys({
  title: joi.string().required(),
  director: joi.string().required(),
  releaseDate: joi.string().required(),
});

export const updateMovieJoiSchema = joi.object().keys({
  title: joi.string().required(),
  director: joi.string().required(),
  releaseDate: joi.string().required(),
});

export const DeleteMovieJoiSchema = joi.object().keys({
  id: joi.number().required(),
});

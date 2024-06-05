import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(dataToBeChecked: any) {
    const { value, error } = this.schema.validate(dataToBeChecked);
    if (error) {
      throw new BadRequestException(error.message);
    }
    return value;
  }
}

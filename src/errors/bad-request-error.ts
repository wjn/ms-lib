import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = 403;

  constructor(public msg: string) {
    super(msg);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.msg }];
  }
}

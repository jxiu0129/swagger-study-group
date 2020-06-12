
/**
 * @extends Error
 */
export default class ApiError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.msg = message;
    this.name = this.constructor.name;
    this.status = statusCode;
    if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, this.constructor);
    } 
  }
}
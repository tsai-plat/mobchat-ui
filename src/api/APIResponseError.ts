export class APIResponseError extends Error {
  code: number = 400
  errors?: any
  constructor(message?: string, code: number = 400, errors?: any) {
    super(message)
    this.code = code
    this.errors = errors
  }

  static createBadRequestError(message: string = 'Bad Request', errors?: any) {
    return new APIResponseError(message, 400, errors)
  }
}

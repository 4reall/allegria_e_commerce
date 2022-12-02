export enum ExceptionsTagsEnum {
  NOT_FOUND = 'not_found',
  EXIST = 'exist',
  INVALID = 'invalid',
  EXPIRED = 'expired',
}
export class ServerException extends Error {
  public tag;
  public errors;

  constructor(
    tag: ExceptionsTagsEnum,
    message: string,
    errors: unknown[] = [],
  ) {
    super(message);
    this.errors = errors;
    this.tag = tag;
  }

  static NotFound(message: string = 'Not found error', errors?: unknown[]) {
    return new ServerException(ExceptionsTagsEnum.NOT_FOUND, message, errors);
  }

  static Exist(message: string = 'Already exist error', errors?: unknown[]) {
    return new ServerException(ExceptionsTagsEnum.EXIST, message, errors);
  }

  static Invalid(message: string = 'Invalid data error', errors?: unknown[]) {
    return new ServerException(ExceptionsTagsEnum.INVALID, message, errors);
  }

  static Expired(message: string = 'Token expired', errors?: unknown[]) {
    return new ServerException(ExceptionsTagsEnum.EXPIRED, message, errors);
  }
}

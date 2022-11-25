import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
export class UserDto {
  @IsDefined()
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'password too weak',
  // })
  readonly password: string;

  @IsDefined()
  @IsString()
  readonly name: string;

  @IsDefined()
  @IsString()
  readonly surname: string;

  @IsDefined()
  @IsPhoneNumber()
  readonly tel: string;

  @IsBoolean()
  readonly mailing: string;
}

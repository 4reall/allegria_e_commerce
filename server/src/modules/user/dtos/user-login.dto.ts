import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserLoginDto {
  @ApiProperty({ type: String, required: true })
  @IsDefined()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ type: String, required: true })
  @IsDefined()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'password too weak',
  // })
  readonly password: string;
}

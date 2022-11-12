import {
  IsDefined,
  IsEmail,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
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

  @ApiProperty({ type: String, required: true })
  @IsDefined()
  @IsString()
  readonly name: string;

  @ApiProperty({ type: String, required: true })
  @IsDefined()
  @IsString()
  readonly surname: string;

  @ApiProperty({ type: String, required: true })
  @IsDefined()
  @IsPhoneNumber()
  readonly tel: string;
}

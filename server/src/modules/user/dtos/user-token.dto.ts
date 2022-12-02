import { IsBoolean, IsDefined, IsMongoId, IsString } from 'class-validator';
import { UserDocument } from 'src/modules/user/schemas/user.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
export class UserTokenDto {
  @IsDefined()
  @IsString({ each: true })
  readonly roles: string[];

  @IsDefined()
  @IsMongoId()
  readonly userId: string;

  @IsDefined()
  @IsBoolean()
  readonly isActivated: boolean;

  constructor(model: UserDocument) {
    this.roles = model.roles.map((role) => role);
    this.userId = model._id;
    this.isActivated = model.isActivated;
  }
}

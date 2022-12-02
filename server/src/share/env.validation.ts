import { plainToInstance } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
  validateSync,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  @IsOptional()
  PORT: number = 5500;

  @IsString()
  @IsDefined()
  @MinLength(1)
  DB_URL: string;

  @IsString()
  @IsDefined()
  @MinLength(8)
  JWT_ACCESS_KEY: string;

  @IsString()
  @IsDefined()
  @MinLength(8)
  JWT_REFRESH_KEY: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    console.log(errors);
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

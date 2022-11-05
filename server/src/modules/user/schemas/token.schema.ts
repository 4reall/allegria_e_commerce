import { ApiProperty } from '@nestjs/swagger';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  @ApiProperty()
  @Prop()
  userId: string;

  @ApiProperty()
  @Prop()
  refreshToken: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @ApiProperty({ type: String, required: true })
  @Prop({ required: true, unique: true })
  value: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

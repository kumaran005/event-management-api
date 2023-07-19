import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// export type CatDocument = HydratedDocument<User>;
@ObjectType()
@Schema()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Prop()
  exampleField: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

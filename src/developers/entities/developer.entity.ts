import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field((type) => Int)
  role_developer: number;
}

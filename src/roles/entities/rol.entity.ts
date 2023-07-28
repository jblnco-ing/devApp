import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Rol {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
}

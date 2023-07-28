import { ObjectType, Field, Int } from '@nestjs/graphql';

enum statusType {
  'In Progress',
  'Pause',
  'Done',
  'Canceled',
  'Other',
}

@ObjectType()
export class Project {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field((type) => statusType)
  status: statusType;
  @Field((type) => Int)
  role_project: number;
}

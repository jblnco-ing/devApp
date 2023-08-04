import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Rol } from 'src/roles/entities/rol.entity';
import { Developer } from 'src/developers/entities/developer.entity';
import { registerEnumType } from '@nestjs/graphql';

export enum statusType {
  'Active',
  'Pause',
  'Done',
  'Canceled',
  'Other',
}
registerEnumType(statusType, {
  name: 'statusType',
});

@Entity()
@ObjectType()
export class Project {
  //id
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  //name
  @Column({ type: 'varchar', length: 80 })
  @Field()
  name: string;
  //description
  @Column({ type: 'varchar', length: 200, nullable: true })
  @Field({ nullable: true })
  description?: string;
  //status
  @Column({ type: 'enum', enum: statusType, nullable: true })
  @Field((type) => statusType, { nullable: true })
  status?: statusType;
  //ManyToMany relationship
  @ManyToMany(() => Rol, (rol) => rol.projects)
  @JoinTable()
  roles: Rol[];
  //ManyToMany relationship
  @ManyToMany(() => Developer, (developer) => developer.projects)
  developers: Developer[];
}

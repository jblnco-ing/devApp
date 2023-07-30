import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Rol } from 'src/roles/entities/rol.entity';
//TypeOrm
//Graphql
//typeScript

@ObjectType()
export class Developer {
  //id
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  //name
  @Column({ type: 'varchar', length: 80 })
  @Field()
  name: string;
  //email
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field({ nullable: true })
  email?: string;
  //role_developer
  @OneToMany(() => Rol, (role_dev) => role_dev.developer)
  role_developer: Rol[];
  //ManyToMany relationship
}

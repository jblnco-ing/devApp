import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { Rol } from 'src/roles/entities/rol.entity';
import { Project } from 'src/projects/entities/projects.entity';
//TypeOrm
//Graphql
//typeScript

@Entity()
@ObjectType()
export class Developer {
  //id
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  //name
  @Column({ type: 'varchar', length: 80, unique: true })
  @Field()
  name: string;
  //email
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field({ nullable: true })
  email?: string;
  //ManyToMany Project relationship
  @ManyToMany(() => Rol, (rol) => rol.developers)
  @JoinTable()
  roles: Rol[];
  //ManyToMany Project relationship
  @ManyToMany(() => Project, (project) => project.developers)
  @JoinTable()
  projects: Project[];
}

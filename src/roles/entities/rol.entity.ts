import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Project } from 'src/projects/entities/projects.entity';
import { Developer } from 'src/developers/entities/developer.entity';

@Entity()
@ObjectType()
export class Rol {
  //id
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  //name
  @Column({ type: 'varchar', length: 80, unique: true })
  @Field()
  name: string;
  //Developer
  //No necesita JoinColum porque él automáticamente
  //sabe que el decorador que el decorador que
  // tiene la relación manyToOne es la que
  //debe tener la FK

  //ManyToMany relationship
  @ManyToMany(() => Developer, (developer) => developer.roles)
  developers: Developer[];

  //ManyToMany relationship
  @ManyToMany(() => Project, (project) => project.roles)
  @JoinTable()
  projects: Project[];
}

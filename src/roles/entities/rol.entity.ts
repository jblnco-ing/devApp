import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from 'src/projects/entities/projects.entity';
import { Developer } from 'src/developers/entities/developer.entity';

@ObjectType()
export class Rol {
  //id
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  //name
  @Column({ type: 'varchar', length: 80 })
  @Field()
  name: string;
  //Developer
  @ManyToOne(() => Developer, (developer) => developer.role_developer)
  @JoinColumn({ name: 'developer_id' })
  developer: Developer;
  //Developer
  @ManyToOne(() => Project, (project) => project.role_project)
  @JoinColumn({ name: 'project_id' })
  project: Project;
}

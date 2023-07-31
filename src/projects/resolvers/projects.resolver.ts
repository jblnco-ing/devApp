import { Resolver, Query } from '@nestjs/graphql';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../entities/projects.entity';

@Resolver()
export class ProjectsResolver {
  constructor(private projectService: ProjectsService) {}
  @Query((returns) => [Project])
  findAllProject() {
    return this.projectService.findAll();
  }
}

import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../entities/projects.entity';
import { CreateProjectDto, UpdateProjectDto } from '../dtos/project.dto';
@Resolver()
export class ProjectsResolver {
  constructor(private projectService: ProjectsService) {}
  @Query((returns) => [Project])
  findAllProject() {
    return this.projectService.findAll();
  }
  @Query((returns) => Project)
  findProjectById(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findProjectById(id);
  }
  @Mutation((returns) => Project)
  createProject(@Args('ProjectInput') ProjectInput: CreateProjectDto) {
    return this.projectService.createProject(ProjectInput);
  }
}

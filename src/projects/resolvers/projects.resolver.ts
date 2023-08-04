import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../entities/projects.entity';
import { CreateProjectDto, UpdateProjectDto } from '../dtos/project.dto';
@Resolver(Project)
export class ProjectsResolver {
  constructor(private projectService: ProjectsService) {}
  @Query(() => [Project])
  findAllProject() {
    return this.projectService.findAll();
  }
  @Query(() => Project)
  findDeveloperById(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findProjectById(id);
  }
  @Query(() => Project)
  findProjectById(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findProjectById(id);
  }
  @Mutation(() => Project)
  createProject(@Args('ProjectInput') ProjectInput: CreateProjectDto) {
    return this.projectService.createProject(ProjectInput);
  }
}

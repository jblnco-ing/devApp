import { Module } from '@nestjs/common';
import { ProjectsService } from './services/projects.service';
import { ProjectsResolver } from './resolvers/projects.resolver';

@Module({
  providers: [ProjectsService, ProjectsResolver],
})
export class ProjectsModule {}

import { Module } from '@nestjs/common';
import { ProjectsService } from './services/projects.service';
import { ProjectsResolver } from './resolvers/projects.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectsService, ProjectsResolver],
})
export class ProjectsModule {}

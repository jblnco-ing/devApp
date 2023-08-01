import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/projects.entity';
import { CreateProjectDto, UpdateProjectDto } from '../dtos/project.dto';
@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findProjectById(id: number): Promise<Project> {
    return this.projectRepository.findOne({
      where: {
        id,
      },
    });
  }

  createProject(project: CreateProjectDto): Promise<Project> {
    const newProject = this.projectRepository.create(project);
    return this.projectRepository.save(newProject);
  }
}

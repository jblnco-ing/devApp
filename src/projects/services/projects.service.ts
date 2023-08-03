import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/projects.entity';
import { CreateProjectDto, UpdateProjectDto } from '../dtos/project.dto';
import { RolesService } from 'src/roles/services/roles.service';
import { Rol } from 'src/roles/entities/rol.entity';
@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    private rolesService: RolesService,
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

  async createProject(project: CreateProjectDto): Promise<Project> {
    const roles = await this.rolesService.findRolesByIds(project.rolesIds);
    project['roles'] = roles;
    console.log(project);
    const newDeveloper = this.projectRepository.create(project);
    return this.projectRepository.save(newDeveloper);
  }

  async getRoles(id: number): Promise<Rol[]> {
    const project = await this.projectRepository.findOne({
      where: {
        id,
      },
      relations: ['roles'],
    });
    return project.roles;
  }
}

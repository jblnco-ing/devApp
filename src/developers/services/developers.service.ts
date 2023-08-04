import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from '../entities/developer.entity';
import { CreateDeveloperDto, UpdateDeveloperDto } from '../dtos/developer.dto';
import { Rol } from 'src/roles/entities/rol.entity';
import { RolesService } from 'src/roles/services/roles.service';
@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private devRepository: Repository<Developer>,
    private rolesService: RolesService,
  ) {}
  findAll(): Promise<Developer[]> {
    return this.devRepository.find();
  }

  async findDeveloperById(id: number): Promise<Developer> {
    return this.devRepository.findOne({
      where: {
        id,
      },
    });
  }
  async createDeveloper(developer: CreateDeveloperDto): Promise<Developer> {
    const roles = await this.rolesService.findRolesByIds(developer.rolesIds);
    developer['roles'] = roles;
    console.log(developer);
    const newDeveloper = this.devRepository.create(developer);
    return this.devRepository.save(newDeveloper);
  }

  async getRoles(id: number): Promise<Rol[]> {
    const developer = await this.devRepository.findOne({
      where: {
        id,
      },
      relations: ['roles'],
    });
    return developer.roles;
  }
}

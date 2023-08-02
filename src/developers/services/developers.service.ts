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
  createDeveloper(developer: CreateDeveloperDto): Promise<Developer> {
    const newDeveloper = this.devRepository.create(developer);
    // //[1,2,3]
    // const idsRolesDeveloper = newDeveloper.roles;
    // idsRolesDeveloper.forEach(idRol => { 
    //   if()
    //   this.devRepository.save({
    //     "name": newDeveloper.name,
    //     "email": newDeveloper.email,
    //     "rolId": idRol,
    //   });
  // });
  //   const myDeveloper = 
    return this.devRepository.save(newDeveloper);
  }

  async getRol(rolId: number): Promise<Rol> {
    return this.rolesService.findRolById(rolId);
  }
}

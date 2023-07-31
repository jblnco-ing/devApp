import { Injectable } from '@nestjs/common';
import { Rol } from '../entities/rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolInput } from '../dtos/create-rol.input';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Rol) private rolRepository: Repository<Rol>) {}

  async findAll(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  createRol(rol: CreateRolInput): Promise<Rol> {
    const newRol = this.rolRepository.create(rol);
    return this.rolRepository.save(newRol);
  }
}

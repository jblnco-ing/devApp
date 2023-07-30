import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from 'src/roles/entities/rol.entity';

@Injectable()
export class DevelopersService {
  constructor(@InjectRepository(Rol) private rolRepo: Repository<Rol>) {}
  async addRol(data: any) {
    const 
  }
}

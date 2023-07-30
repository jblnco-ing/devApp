import { Injectable } from '@nestjs/common';
import { Rol } from '../entities/rol.entity';

@Injectable()
export class RolesService {
  findAll(): Rol[] {
    return [
      {
        id: 1,
        name: 'Frontend Developer',
      },
      {
        id: 2,
        name: 'Backend Developer',
      },
    ];
  }
}

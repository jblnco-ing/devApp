import { Query, Resolver } from '@nestjs/graphql';
import { RolesService } from '../services/roles.service';
import { Rol } from '../entities/rol.entity';

@Resolver()
export class RolesResolver {
  constructor(private rolesService: RolesService) {}
  @Query((returns) => [Rol])
  findAllRoles() {
    return this.rolesService.findAll();
  }
}

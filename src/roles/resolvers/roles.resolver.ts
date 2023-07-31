import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { RolesService } from '../services/roles.service';
import { Rol } from '../entities/rol.entity';
import { CreateRolInput } from '../dtos/create-rol.input';

@Resolver()
export class RolesResolver {
  constructor(private rolesService: RolesService) {}
  @Query((returns) => [Rol])
  findAllRoles() {
    return this.rolesService.findAll();
  }
  @Mutation((returns) => Rol)
  createRol(@Args('rolInput') rolInput: CreateRolInput) {
    return this.rolesService.createRol(rolInput);
  }
}

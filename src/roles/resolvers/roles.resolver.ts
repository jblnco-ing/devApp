import { Query, Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from '../services/roles.service';
import { Rol } from '../entities/rol.entity';
import { CreateRolDto, UpdateRolDto } from '../dtos/rol.dto';
import { DeleteResult } from 'typeorm/driver/mongodb/typings';

@Resolver()
export class RolesResolver {
  constructor(private rolesService: RolesService) {}
  @Query((returns) => [Rol])
  findAllRoles() {
    return this.rolesService.findAll();
  }
  @Query((returns) => Rol)
  findRolById(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.findRolById(id);
  }
  @Mutation((returns) => Rol)
  createRol(@Args('rolInput') rolInput: CreateRolDto) {
    return this.rolesService.createRol(rolInput);
  }

  @Mutation((returns) => Rol)
  updateRol(
    @Args('id', { type: () => Int }) id: number,
    @Args('rolInput') rolInput: UpdateRolDto,
  ) {
    return this.rolesService.updateRol(id, rolInput);
  }

  @Mutation((returns) => Rol)
  async deleteRol(@Args('id', { type: () => Int }) id: number) {
    await this.rolesService.removeRolById(id);
    return { message: 'success' };
  }
  // @Mutation(() => Rol)
  // async deleteRol(
  //   @Args('id', { type: () => Int }) id: number,
  // ): Promise<Rol | undefined> {
  //   return this.rolesService.removeRolById(id);
  // }
}

import {
  Resolver,
  Query,
  Args,
  Int,
  Mutation,
  ResolveField,
  Parent,
  ResolveProperty,
} from '@nestjs/graphql';
import { DevelopersService } from '../services/developers.service';
import { Developer } from '../entities/developer.entity';
import { CreateDeveloperDto } from '../dtos/developer.dto';
import { RolesService } from 'src/roles/services/roles.service';
import { Rol } from 'src/roles/entities/rol.entity';
@Resolver(Developer)
export class DevelopersResolver {
  constructor(private devService: DevelopersService) {}
  @Query(() => [Developer])
  findAllDeveloper() {
    return this.devService.findAll();
  }
  @Query(() => Developer)
  findDeveloperById(@Args('id', { type: () => Int }) id: number) {
    return this.devService.findDeveloperById(id);
  }
  @Mutation(() => Developer)
  createDeveloper(@Args('DeveloperInput') DeveloperInput: CreateDeveloperDto) {
    //id de los roles de un developer
    // const idsRolesDeveloperInput = DeveloperInput.rolId;
    // const allRoles = this.rolService.findAll();
    // const a = this.devService.createDeveloper(DeveloperInput);
    return this.devService.createDeveloper(DeveloperInput);
  }
  @ResolveProperty(() => [Rol])
  async roles(@Parent() developer: Developer) {
    return this.devService.getRoles(developer.id);
  }
}

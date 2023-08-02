import { Resolver, Query, Args, Int, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { DevelopersService } from '../services/developers.service';
import { Developer } from '../entities/developer.entity';
import { CreateDeveloperDto } from '../dtos/developer.dto';
import { RolesService } from 'src/roles/services/roles.service';
import { Rol } from 'src/roles/entities/rol.entity';
@Resolver((of) => Developer)
export class DevelopersResolver {
  constructor(
    private devService: DevelopersService,
  ) {}
  @Query((returns) => [Developer])
  findAllDeveloper() {
    return this.devService.findAll();
  }
  @Query((returns) => Developer)
  findDeveloperById(@Args('id', { type: () => Int }) id: number) {
    return this.devService.findDeveloperById(id);
  }
  @Mutation((returns) => Developer)
  createDeveloper(@Args('DeveloperInput') DeveloperInput: CreateDeveloperDto,) {
    //id de los roles de un developer
    // const idsRolesDeveloperInput = DeveloperInput.rolId;
    // const allRoles = this.rolService.findAll();
    // const a = this.devService.createDeveloper(DeveloperInput);
    return this.devService.createDeveloper(DeveloperInput);
  }
  
  @ResolveField((returns) => Rol)
  rol(@Parent() developer: Developer): Promise<Rol> {
    return this.devService.getRol(developer.rolId);
  }
}

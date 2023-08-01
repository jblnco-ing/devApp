import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { DevelopersService } from '../services/developers.service';
import { Developer } from '../entities/developer.entity';
import { CreateDeveloperDto } from '../dtos/developer.dto';

@Resolver()
export class DevelopersResolver {
  constructor(private devService: DevelopersService) {}
  @Query((returns) => [Developer])
  findAllDeveloper() {
    return this.devService.findAll();
  }
  @Query((returns) => Developer)
  findDeveloperById(@Args('id', { type: () => Int }) id: number) {
    return this.devService.findDeveloperById(id);
  }
  @Mutation((returns) => Developer)
  createDeveloper(@Args('DeveloperInput') DeveloperInput: CreateDeveloperDto) {
    return this.devService.createDeveloper(DeveloperInput);
  }
}

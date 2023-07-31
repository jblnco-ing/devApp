import { Resolver, Query } from '@nestjs/graphql';
import { DevelopersService } from '../services/developers.service';
import { Developer } from '../entities/developer.entity';
@Resolver()
export class DevelopersResolver {
  constructor(private developersService: DevelopersService) {}
  @Query((returns) => [Developer])
  findAllDeveloper() {
    return this.developersService.findAll();
  }
}

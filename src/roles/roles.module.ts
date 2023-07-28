import { Module } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesResolver } from './resolvers/roles.resolver';

@Module({
  providers: [RolesService, RolesResolver],
})
export class RolesModule {}

import { Module } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesResolver } from './resolvers/roles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  providers: [RolesService, RolesResolver],
})
export class RolesModule {}

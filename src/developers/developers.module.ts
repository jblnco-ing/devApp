import { Module } from '@nestjs/common';
import { DevelopersService } from './services/developers.service';
import { DevelopersResolver } from './resolvers/developers.resolver';

@Module({
  providers: [DevelopersService, DevelopersResolver],
})
export class DevelopersModule {}

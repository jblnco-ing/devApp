import { Module } from '@nestjs/common';
import { DevelopersService } from './services/developers.service';
import { DevelopersResolver } from './resolvers/developers.resolver';
import { Developer } from './entities/developer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:
  providers: [DevelopersService, DevelopersResolver],
})
export class DevelopersModule {}

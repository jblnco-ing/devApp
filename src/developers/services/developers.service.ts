import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from '../entities/developer.entity';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer) private devRepository: Repository<Developer>,
  ) {}
  findAll(): Promise<Developer[]> {
    return this.devRepository.find();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from '../entities/developer.entity';
import { CreateDeveloperDto, UpdateDeveloperDto } from '../dtos/developer.dto';
@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer) private devRepository: Repository<Developer>,
  ) {}
  findAll(): Promise<Developer[]> {
    return this.devRepository.find();
  }

  async findDeveloperById(id: number): Promise<Developer> {
    return this.devRepository.findOne({
      where: {
        id,
      },
    });
  }

  createDeveloper(developer: CreateDeveloperDto): Promise<Developer> {
    const newDeveloper = this.devRepository.create(developer);
    return this.devRepository.save(newDeveloper);
  }
}

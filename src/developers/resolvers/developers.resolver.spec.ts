import { Test, TestingModule } from '@nestjs/testing';
import { DevelopersResolver } from './developers.resolver';

describe('DevelopersResolver', () => {
  let resolver: DevelopersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopersResolver],
    }).compile();

    resolver = module.get<DevelopersResolver>(DevelopersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

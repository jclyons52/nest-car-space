import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResolver],
    }).compile();
    resolver = module.get<UserResolver>(UserResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

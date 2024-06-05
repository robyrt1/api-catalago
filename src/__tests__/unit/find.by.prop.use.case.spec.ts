import { UserRepository } from '@infrastructure/database/repositories/user.repository';
import { mockedUsers } from '@tests/__mocks__/user/usecases/find.by.prop.use.case.mock';
import { FindByPropUserUseCase } from '@usecases/user/find.by.prop.user.use.case';

describe('FindByPropUserUseCase', () => {
  const mockUserRepository = UserRepository as jest.Mock<UserRepository>;
  const mockedUserRepository =
    new mockUserRepository() as jest.Mocked<UserRepository>;

  const mockFindByPropUserUseCase =
    FindByPropUserUseCase as jest.Mock<FindByPropUserUseCase>;
  const mockedFindByPropUserUseCase = new mockFindByPropUserUseCase(
    mockedUserRepository,
  ) as jest.Mocked<FindByPropUserUseCase>;

  it('should get an user by email', async () => {
    const [user] = mockedUsers;

    jest.spyOn(mockedUserRepository, 'findByProp').mockResolvedValue(user);

    const sut = await mockedFindByPropUserUseCase.execute({ email: 'test' });

    expect(sut).not.toBeUndefined();
    expect(sut).toBe(user);
  });
});

import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );
    const authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Nere',
      email: 'nere@email.com',
      password: 'encrypted_password',
    });

    const response = await authenticateUser.execute({
      email: 'nere@email.com',
      password: 'encrypted_password',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toBe(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    expect(
      authenticateUser.execute({
        email: 'nere2@email.com',
        password: 'encrypted_password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );
    const authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'Nere',
      email: 'nere@email.com',
      password: 'encrypted_password',
    });

    expect(
      authenticateUser.execute({
        email: 'nere@email.com',
        password: 'wrong_password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

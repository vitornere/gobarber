import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Nere',
      email: 'nere@email.com',
      password: 'encrypted_password',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Nere');
    expect(user.email).toBe('nere@email.com');
    expect(user.password).not.toBe('encrypted_password');
  });

  it('should not be able to create two user with the same email', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'Nere',
      email: 'nere@email.com',
      password: 'encrypted_password',
    });

    expect(
      createUser.execute({
        name: 'Nere',
        email: 'nere@email.com',
        password: 'encrypted_password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

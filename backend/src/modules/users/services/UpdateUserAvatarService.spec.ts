import FakeStorageProvider from '@shared/container/providers/StorageProviders/fakes/FakeStorageProvider';
import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('should be able to update user avatar', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUserRepository,
      fakeStorageProvider,
    );

    const user = await fakeUserRepository.create({
      name: 'Nere',
      email: 'nere@email.com',
      password: 'encrypted_password',
    });

    const userUpdated = await updateUserAvatar.execute({
      avatarFileName: 'avatarFileName.jpg',
      user_id: user.id,
    });

    expect(userUpdated.avatar).toContain('avatarFileName.jpg');
  });

  it('should not be able to update user avatar with non authenticated user', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUserRepository,
      fakeStorageProvider,
    );
    expect(
      updateUserAvatar.execute({
        avatarFileName: 'avatarFileName.jpg',
        user_id: 'no-authenticated-user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should try delete old avatar before create new', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUserRepository,
      fakeStorageProvider,
    );

    const user = await fakeUserRepository.create({
      name: 'Nere',
      email: 'nere@email.com',
      password: 'encrypted_password',
    });

    await updateUserAvatar.execute({
      avatarFileName: 'avatarFileName1.jpg',
      user_id: user.id,
    });

    const updatedUser = await updateUserAvatar.execute({
      avatarFileName: 'avatarFileName2.jpg',
      user_id: user.id,
    });

    expect(deleteFile).toHaveBeenCalledWith('avatarFileName1.jpg');
    expect(updatedUser.avatar).toBe('avatarFileName2.jpg');
  });
});

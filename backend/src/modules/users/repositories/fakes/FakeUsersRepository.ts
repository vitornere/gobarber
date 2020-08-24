import IAppointsRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import { uuid } from 'uuidv4';

class FakeUsersRepository implements IAppointsRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(u => u.id === id);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(u => u.email === email);

    return user;
  }

  async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }

  async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(u => u.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;

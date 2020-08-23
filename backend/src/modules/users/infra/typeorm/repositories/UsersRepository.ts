import { getRepository, Repository } from 'typeorm';
import IAppointsRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IAppointsRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.ormRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      where: { email },
    });
  }

  async create({ email, name, password }: ICreateUserDTO): Promise<User> {
    const apppointment = this.ormRepository.create({ email, name, password });

    await this.ormRepository.save(apppointment);

    return apppointment;
  }

  async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;

import IHashProvider from '../models/IHashProvider';

export default class FakeHashProvider implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return `hashed_password_${payload}`;
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return `hashed_password_${payload}` === hashed;
  }
}

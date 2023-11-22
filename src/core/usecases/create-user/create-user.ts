import { User } from '@core/entities/user';
import { UsersRepository } from '@core/repositories/users-repository';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

export interface CreateUserRequest {
  username: string
  password: string
}

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private jwtSecret: string,
  ) {}

  async execute({ username, password }: CreateUserRequest): Promise<string> {
    if (!username && !password) {
      throw new Error('No username and no password.');
    }

    const userAlreadyExists = await this.usersRepository.findByUsername(username);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
    });

    await this.usersRepository.create(user);

    const token = sign({ userId: user.id, username: user.username }, this.jwtSecret, {
      expiresIn: '12h',
    });

    return token;
  }
}

import { User } from '@core/entities/user';

export interface UsersRepository {
  create(user: User): Promise<void>
  findById(userId: string): Promise<User | null>
  findByUsername(username: string): Promise<User | null>
  updateByUsername(username: string, newUser: User): Promise<void>
  deleteByUsername(username: string): Promise<void>
}

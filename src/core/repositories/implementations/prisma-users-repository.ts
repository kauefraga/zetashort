import { User } from '@core/entities/user';
import { UsersRepository } from '@core/repositories/users-repository';
import { prisma } from '@infra/prisma';

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User): Promise<void> {
    if (!user.id) {
      throw new Error('User has no id property.');
    }

    if (!user.createdAt) {
      throw new Error('User has no createdAt property.');
    }

    await prisma.user.create({
      data: {
        id: user.id,
        username: user.username,
        password: user.password,
        createdAt: user.createdAt,
      },
    });
  }

  async findById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        password: true,
        createdAt: true,
      },
    });

    if (user) {
      return new User({
        id: user.id,
        username: user.username,
        password: user.password,
        createdAt: user.createdAt,
      });
    }

    return user;
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        password: true,
        createdAt: true,
      },
    });

    if (user) {
      return new User({
        id: user.id,
        username: user.username,
        password: user.password,
        createdAt: user.createdAt,
      });
    }

    return user;
  }

  async updateByUsername(username: string, newUser: User): Promise<void> {
    if (!newUser.id) {
      throw new Error('New user has no id property.');
    }

    if (!newUser.createdAt) {
      throw new Error('New user has no createdAt property.');
    }

    await prisma.user.update({
      where: {
        username,
      },
      data: {
        id: newUser.id,
        username: newUser.username,
        password: newUser.password,
        createdAt: newUser.createdAt,
      },
    });
  }

  async deleteByUsername(username: string): Promise<void> {
    await prisma.user.delete({
      where: {
        username,
      },
    });
  }
}

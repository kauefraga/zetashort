import { describe, it, expect } from 'vitest';
import { User } from '@core/entities/user';

describe('User entity', () => {
  it('should be able to create an user', () => {
    const user = new User({
      username: 'Test User',
      password: 'kDtestSDAS=2312_.das',
    });

    expect(user).toBeInstanceOf(User);
  });

  it('should return user properties correctly', () => {
    const user = new User({
      username: 'Test User',
      password: 'kDtestSDAS=2312_.das',
    });

    expect(user.username).toEqual('Test User');
    expect(user.password).toEqual('kDtestSDAS=2312_.das');
    expect(user.createdAt).toBeInstanceOf(Date);
  });

  it('should be able to update a user', () => {
    const user = new User({
      username: 'Test User',
      password: 'kDtestSDAS=2312_.das',
    });

    user.username = 'New Test Username';
    user.password = 'kDtestS';

    expect(user.username).toEqual('New Test Username');
    expect(user.password).toEqual('kDtestS');
  });
});

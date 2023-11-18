import { randomUUID } from 'node:crypto';

interface Props {
  id?: string
  username: string
  password: string
  createdAt?: Date
}

export class User {
  private props: Props;

  constructor(props: Props) {
    this.props = props;

    if (!this.props.id) {
      this.props.id = randomUUID();
    }

    if (!this.props.createdAt) {
      this.props.createdAt = new Date();
    }
  }

  get id() {
    return this.props.id;
  }

  get username() {
    return this.props.username;
  }

  set username(newUsername: string) {
    this.props.username = newUsername;
  }

  get password() {
    return this.props.password;
  }

  set password(newPassword: string) {
    this.props.password = newPassword;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}

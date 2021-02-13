import Adapters, { TypeORMUserModel } from 'next-auth/adapters'

export default class User extends (Adapters.TypeORM.Models.User
  .model as typeof TypeORMUserModel) {
  constructor(
    name?: string,
    email?: string,
    image?: string,
    emailVerified?: Date
  ) {
    super(name, email, image, emailVerified)
  }
}

export const UserSchema = {
  name: 'User',
  target: User,
  columns: {
    userTag: {
      type: 'varchar',
      nullable: true,
    },
    ...Adapters.TypeORM.Models.User.schema.columns,
  },
}

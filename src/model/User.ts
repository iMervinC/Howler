import Adapters, { TypeORMUserModel } from 'next-auth/adapters'
import { EntitySchemaColumnOptions } from 'typeorm'

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

interface UserSchema {
  name: string
  target: typeof User
  columns: {
    name?: EntitySchemaColumnOptions | undefined
    email?: EntitySchemaColumnOptions | undefined
    image?: EntitySchemaColumnOptions | undefined
    userTag?: EntitySchemaColumnOptions | undefined
    emailVerified?: EntitySchemaColumnOptions | undefined
  }
}

export const UserSchema: UserSchema = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    userTag: {
      type: 'varchar',
      nullable: true,
    },
  },
}

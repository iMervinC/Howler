import mongoose, { Schema } from 'mongoose'

const MODEL_NAME = 'User'

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    userTag: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, 'users')

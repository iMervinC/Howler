import mongoose, { Document, ObjectId, Schema } from 'mongoose'

const MODEL_NAME = 'Howl'

interface Howl extends Document {
  howl: string
  user: ObjectId
}

const schema = new Schema(
  {
    howl: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models[MODEL_NAME] ||
  mongoose.model<Howl>(MODEL_NAME, schema, 'howls')

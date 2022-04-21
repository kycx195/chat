import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender: {
    id: String,
    username: String,
    avatar: String
  },
  receiver: {
    id: String,
    username: String,
    avatar: String
  },
  text: String,
  file: {
    data: Buffer,
    contentType: String,
    fileName: String
  },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  deletedAt: {type: Date, default: null}
});

export default mongoose.model('Message', MessageSchema);

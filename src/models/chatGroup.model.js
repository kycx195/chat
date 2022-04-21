import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChatGroupSchema = new Schema({
  name: String,
  userAmount: {type: Number, default: 0, min: 3, max: 100},
  messageAmount: {type: Number, default:0},
  userId: String,
  members: [{
    userId: String,
  }],
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  deletedAt: {type: Date, default: null}
});

export default mongoose.model('ChatGroup', ChatGroupSchema);

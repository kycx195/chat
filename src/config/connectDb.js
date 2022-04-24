import bluebird from 'bluebird';
import mongoose from 'mongoose';

const connectDb = () => {
  mongoose.Promise = bluebird;

  const DB_CONNECTION = process.env.DB_CONNECTION;
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = process.env.DB_PORT;
  const DB_NAME = process.env.DB_NAME;
  const DB_USERNAME = process.env.DB_USERNAME;
  const DB_PASSWORD = process.env.DB_PASSWORD;


  let URI = '';
  if (DB_USERNAME && DB_PASSWORD) {
    URI = `${DB_CONNECTION}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  } else {
    URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  }

  console.log(URI);
  

  return mongoose.connect('mongodb://root:root@localhost:27017/chat?authSource=admin', { useNewUrlParser: true });
};

export default connectDb;

import mongoose from 'mongoose';

import User from './user';
import Game from './game';
import Score from './score';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = {
  User,
  Game,
  Score
};

export { connectDb };

export default models;
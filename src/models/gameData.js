import mongoose from 'mongoose';

const gameDataSchema = new mongoose.Schema({
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  fields: {
    type: [String]
  },
  data: {
    type: [mongoose.Schema.Types.Mixed]
  }
},
{ timestamps: true }
);

const GameData = mongoose.model('GameData', gameDataSchema);

export default GameData;
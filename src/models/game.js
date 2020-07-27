import mongoose from 'mongoose';

/**
 * Game definition
 */
const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  players: {
    type: Number,
    default: 1
  },
  maximumScore: {
    type: Number
  },
  minimumScore: {
    type: Number,
    default: 0
  }
},
{
  timestamps: true
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
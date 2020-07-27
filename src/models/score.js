import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  game: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Game',
    required: true, 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  scoreValue: {
    type: Number,
    required: true,
  },
},
{
  timestamps: true
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;
/* eslint-disable prettier/prettier */
import { Schema} from 'mongoose';

export const HackerNewsSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  created_at: { type: Date, required: true },
});

import { Comment } from './comment';

export interface Post {
  id: number;
  title: string;
  text: string;
  img: string;
  author: string;
  comments: Comment[];
}
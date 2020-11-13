import { Comments } from './comments.model';
import { Likes } from './likes.model';

export class Posts {
  id: string;
  user: string;
  title: string;
  picture: string;
  comments: Comments[];
  likes: Likes[];
}

import { Component, OnInit } from '@angular/core';
import { InstaService } from './insta.service';
import { Comments } from './model/comments.model';
import { Likes } from './model/likes.model';
import { Posts } from './model/posts.model';

@Component({
  selector: 'app-instaogti',
  templateUrl: './instaogti.component.html',
  styleUrls: ['./instaogti.component.css'],
})
export class InstaogtiComponent implements OnInit {
  public superheroi = 'superman';

  public allPosts: Posts[] = [];
  public allComments: Comments[] = [];
  public allLikes: Likes[] = [];
  public allPostsSize: number = 0;
  public allCommentsSize: number = 0;
  public allLikesSize: number = 0;

  constructor(private instaService: InstaService) {}

  async ngOnInit(): Promise<void> {
    this.allPosts = await this.instaService.getPosts().toPromise();
    this.allComments = await this.instaService.getComments().toPromise();
    this.allLikes = await this.instaService.getLikes().toPromise();

    this.allPosts = this.allPosts
      .filter((p) => p.user === this.superheroi)
      .map((p) => {
        const comments = this.allComments.filter((c) => c.postId === p.id);
        const likes = this.allLikes.filter((l) => l.postId === p.id);
        return { ...p, comments: comments, likes: likes };
      });

    this.allCommentsSize = this.allPosts.reduce((acc, post) => {
      return (acc += post.comments.length);
    }, 0);

    this.allLikesSize = this.allPosts.reduce((acc, post) => {
      return (acc += post.likes.length);
    }, 0);

    this.allPostsSize = this.allPosts.length;
  }

  caminhoFoto(foto: string) {
    return `../../assets/${foto}`;
  }
}

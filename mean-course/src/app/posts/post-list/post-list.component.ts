import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
    // {title: 'First Post', content: 'Leedle lee'},
    // {title: 'Second Post', content: 'Leedle loo'},
    // {title: 'Third Post', content: 'Leedle lay'},
  // ];
 posts: Post[] = [];
 private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPost();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts; // we update posts when on is added
      }); // so we see our posts when we add a posts
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe(); // to prevent memory leaks
  }
}

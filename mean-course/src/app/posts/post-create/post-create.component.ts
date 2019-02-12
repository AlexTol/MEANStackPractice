import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

// marks class as a component
// needs template and selector
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // entered value is bound in the post-create.component.html
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {

  }

  onAddPost(form: NgForm) {
    // because we make a component required, this will change the form invalid value
    // if requirements not meant (angular feature)
    if (form.invalid) {
      return;
    }
    // we store our posts in the service
    this.postsService.addPost(form.value.enteredTitle, form.value.enteredContent);
    form.resetForm();
  }
}

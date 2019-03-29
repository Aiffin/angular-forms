import { Component,EventEmitter,Output } from '@angular/core';
import { Post } from '../../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
  enteredtitle = '';
  enteredcontent = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAdd(form: NgForm){
    if (form.invalid){
      return;
    }
    const post: Post =
    {
       title :form.value.title,
      content: form.value.content
  };
  this.postCreated.emit(post);
  form.resetForm();
}
}

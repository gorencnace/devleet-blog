import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post-details/:id', component: PostDetailsComponent},
  {path: 'post-create', component: PostCreateComponent},
  {path: 'post-details/:id/comment-create', component: CommentCreateComponent},
  {path: 'comment/:id/comment-reply', component: CommentCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentComponent } from './comment/comment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    CommentComponent,
    PostCreateComponent,
    CommentCreateComponent,
    PostUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

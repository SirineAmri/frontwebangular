import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MatchComponent } from './match/match.component';
import { ApropsComponent } from './aprops/aprops.component';
import { useAnimation } from '@angular/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TestComponent } from './test/test.component';
import { PremiumComponent } from './premium/premium.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BlogComponent } from './blog/blog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { TutorialsListComponent } from './forum/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './forum/tutorial-details/tutorial-details.component';
import { CreatePostComponent } from './forum/create-post/create-post.component';

import { UpdatePostComponent } from './forum/update-post/update-post.component';
import {PostviewComponent} from './forum/postview/postview.component';
const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "sinscrire", component: LoginRegisterComponent},
  { path: "match", component: MatchComponent},
  { path: "profile", component: UserProfileComponent},
  { path: 'viewpost/:id', component: PostviewComponent },
  { path: 'update-post/:id', component: UpdatePostComponent },


  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: "apropos", component: ApropsComponent},
  { path: "test", component: TestComponent},
  { path: 'create-post', component: CreatePostComponent },


  { path: "premium", component: PremiumComponent},
  { path: "forget-password", component: ForgetPasswordComponent},
  { path: "blog", component: BlogComponent},
  { path: "blog-exemple", component: DialogOverviewExampleDialogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

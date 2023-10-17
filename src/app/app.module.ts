import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MatchComponent } from './match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApropsComponent } from './aprops/aprops.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from './ResetPasswordFromProfil/dialog-elements-example-dialog.component';
import { TestComponent } from './test/test.component';
import { PremiumComponent } from './premium/premium.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BlogComponent } from './blog/blog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { RecaptchaModule } from "ng-recaptcha";
import { CommentComponent } from './forum/comment/comment.component';
import { CreatePostComponent } from './forum/create-post/create-post.component';
import { PostviewComponent } from './forum/postview/postview.component';
import { UpdatePostComponent } from './forum/update-post/update-post.component';
import { NavComponent } from './forum/nav/nav.component';
import { SideComponent } from './forum/side/side.component';
import { SideBarComponent } from './forum/side-bar/side-bar.component';
import { TileComponent } from './forum/tile/tile.component';
import { TopbarComponent } from './forum/topbar/topbar.component';
import { TutorialDetailsComponent } from './forum/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './forum/tutorials-list/tutorials-list.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginRegisterComponent,
    MatchComponent,
    ApropsComponent,
    UserProfileComponent,
    DialogElementsExampleDialogComponent,
    TestComponent,
    PremiumComponent,
    ForgetPasswordComponent,
    BlogComponent,
    DialogOverviewExampleDialogComponent,
    CommentComponent,
    CreatePostComponent,
    PostviewComponent,
    UpdatePostComponent,
    NavComponent,
    SideComponent,
    SideBarComponent,
    TileComponent,
    TopbarComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,

    RecaptchaModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

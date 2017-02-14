import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FirstApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/gitusers';
import { GithubUsersService } from '../providers/github-users-service';

@NgModule({
  declarations: [
    FirstApp,
    Page1,
    Page2,
    Page3
  ],
  imports: [
    IonicModule.forRoot(FirstApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FirstApp,
    Page1,
    Page2,
    Page3
  ],
  providers: [
    GithubUsersService
  ]
})
export class AppModule {}

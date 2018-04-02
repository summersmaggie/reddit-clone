import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PostComponent } from './post/post.component';
import { HotComponent } from './hot/hot.component';

const appRoutes: Routes = [
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'hot',
    component: HotComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

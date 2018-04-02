import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FrontPageComponent } from './front-page/front-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

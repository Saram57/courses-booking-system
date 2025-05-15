import { Routes } from '@angular/router';
import { NotfoundComponent } from './pages/main-layout/notfound/notfound.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { loggedGuard } from './core/guard/logged.guard';
import { authGuard } from './core/guard/auth.guard';
import { GoogleMapsModule } from '@angular/google-maps';
import { IconComponent } from './shared/components/icon/icon.component'; 
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate:[authGuard],
    children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
    
          {
            path: 'home',
            loadComponent: () =>
              import('./pages/main-layout/home/home.component').then((m) => m.HomeComponent),
            title: 'home',
          },
          {
            path: 'profiling',
            loadComponent: () =>
              import('./pages/main-layout/profiling-personal/profiling-personal.component').then((m) => m.ProfilingPersonalComponent),
            title: 'personal-profiling',
          },
          {
            path: 'contact-us',
            loadComponent: () =>
              import('./pages/main-layout/contact-us/contact-us.component').then((m) => m.ContactUsComponent),
            title: 'contact-us',
          },
          {
            path: 'about',
            loadComponent: () =>
              import('./pages/main-layout/about/about.component').then((m) => m.AboutComponent),
            title: 'about-us',
          },
           
          {
            path: 'courses',
            loadComponent: () =>
              import('./pages/main-layout/courses/courses.component').then((m) => m.coursesComponent),
            title: 'courses',
          },
          {
            path: 'setting',
            loadComponent: () =>
              import('./pages/main-layout/setting/setting.component').then((m) => m.SettingComponent),
            title: 'setting',
          },
        ],
      },
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {
            path: 'login',
            loadComponent: () =>
              import('./auth/pages/sign-in/sign-in.component').then((m) => m.SignInComponent),
            title: 'Login',
            canActivate: [loggedGuard],
          },
        ],
      },
      { path: '**', component: NotfoundComponent },
    
         
      
];

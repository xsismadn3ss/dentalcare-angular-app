import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard] // Protege esta ruta
  },
  // Ruta para un componente principal o dashboard (ejemplo)
  // {
  //   path: '',
  //   component: HomeComponent, // Debes crear este componente
  //   canActivate: [AuthGuard]
  // },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirige la ruta vacía a /users por defecto
  { path: '**', redirectTo: '/login' } // Redirige cualquier otra ruta no encontrada a /login
];

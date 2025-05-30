import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule // Añade CommonModule a los imports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dentalcare-angular-app';

  constructor(public authService: AuthService) {} // Inyecta AuthService y hazlo público

  logout(): void {
    this.authService.logout();
  }
}

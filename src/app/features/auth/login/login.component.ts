import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service';
import { LoginRequest } from '../../../core/services'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    // Redirige a la página principal si ya está logueado
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Getter para fácil acceso a los campos del formulario
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // Detiene aquí si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const loginRequest: LoginRequest = {
      username: this.f['username'].value,
      password: this.f['password'].value
    };

    this.authService.login(loginRequest)
      .subscribe({
        next: () => {
          // El login fue exitoso, AuthService se encarga de la redirección
          // o puedes obtener la URL de retorno de los queryParams si la configuraste en el guard
          const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = error.message || 'Error en el inicio de sesión. Inténtalo de nuevo.';
          this.loading = false;
        }
      });
  }
}

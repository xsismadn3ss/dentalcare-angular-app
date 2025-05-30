import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthControllerService, LoginRequest, UsuarioDto } from '../services'; // Asumiendo que los servicios generados están en esta ruta

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UsuarioDto | null>;
  public currentUser: Observable<UsuarioDto | null>;
  private readonly TOKEN_KEY = 'authToken';
  private isBrowser: boolean;

  constructor(
    private authControllerService: AuthControllerService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    let storedToken: string | null = null;
    if (this.isBrowser) {
      storedToken = localStorage.getItem(this.TOKEN_KEY);
    }
    // Aquí podrías añadir lógica para validar el token almacenado y obtener los datos del usuario si el token es válido
    // Por ahora, si hay token, asumimos que el usuario está logueado, pero no tenemos sus datos completos.
    // Una mejor aproximación sería llamar a un endpoint /me o similar para obtener el perfil del usuario.
    this.currentUserSubject = new BehaviorSubject<UsuarioDto | null>(storedToken ? ({} as UsuarioDto) : null); // Placeholder para usuario logueado
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioDto | null {
    return this.currentUserSubject.value;
  }

  public get isLoggedIn(): boolean {
    if (this.isBrowser) {
      return !!localStorage.getItem(this.TOKEN_KEY);
    }
    return false;
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.authControllerService.login(loginRequest).pipe(
      tap((response: any) => {
        // Asumiendo que la respuesta del login incluye el token y opcionalmente los datos del usuario
        // Ajusta esto según la respuesta real de tu API
        if (response && response.token) {
          if (this.isBrowser) {
            localStorage.setItem(this.TOKEN_KEY, response.token);
          }
          // Si la respuesta también incluye los datos del usuario, actualiza currentUserSubject
          // Ejemplo: this.currentUserSubject.next(response.user);
          // Por ahora, navegamos y el guard se encargará o podrías recargar datos del usuario.
          this.router.navigate(['/']); // Redirige a la página principal o dashboard
        } else {
          // Manejar el caso donde el token no está presente en la respuesta
          console.error('Token no encontrado en la respuesta del login');
          // Podrías querer limpiar el localStorage aquí también por si acaso
          if (this.isBrowser) {
            localStorage.removeItem(this.TOKEN_KEY);
          }
          this.currentUserSubject.next(null);
        }
      })
    );
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Opcional: Método para obtener el token actual
  getToken(): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  // Opcional: Método para cargar el perfil del usuario si solo tienes el token
  // loadUserProfile(): Observable<UsuarioDto> | null {
  //   if (this.isLoggedIn && !this.currentUserValue) {
  //     // Llama a un endpoint para obtener los datos del usuario usando el token
  //     // Ejemplo: return this.usuarioControllerService.getProfile().pipe(
  //     //   tap(user => this.currentUserSubject.next(user))
  //     // );
  //   }
  //   return null;
  // }
}

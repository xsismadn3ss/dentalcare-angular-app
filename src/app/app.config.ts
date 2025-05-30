import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Importa HTTP_INTERCEPTORS

import { routes } from './app.routes';
import { AuthService } from './core/auth/auth.service';
import { UsuarioControllerService } from './core/services';
// Si tuvieras un interceptor, lo importarías aquí, por ejemplo:
// import { AuthInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), // Necesario para los servicios HTTP generados y AuthService
    AuthService,                          // Proveedor para AuthService
    UsuarioControllerService,             // Proveedor para UsuarioControllerService
    // Si tuvieras un interceptor, lo añadirías así:
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
  ]
};

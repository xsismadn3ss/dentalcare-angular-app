import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioControllerService, UsuarioDto, Pageable } from '../../../core/services'; // Ajusta la ruta si es necesario
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<UsuarioDto[]> | undefined;
  // users$: Observable<PageUsuarioDto> | undefined; // Si tu API devuelve paginación
  error: string | null = null;

  constructor(private usuarioService: UsuarioControllerService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Ejemplo para obtener todos los usuarios. Ajusta según tu API.
    // Si getAllUsers espera un Pageable, debes proporcionarlo.
    // const pageable: Pageable = { page: 0, size: 10 }; // Ejemplo de Pageable
    // this.users$ = this.usuarioService.getAllUsers({ pageable });

    // Si getAllUsers no espera Pageable y devuelve un array directamente:
    // this.users$ = this.usuarioService.getAllUsers();

    // Dado que la definición de getAllUsers en api-definition.json espera Pageable
    // y devuelve PageUsuarioDto, vamos a simular la llamada y extraer el contenido.
    // En una aplicación real, manejarías la paginación adecuadamente.

    const pageable: Pageable = { page: 0, size: 20, sort: [] }; // Ejemplo de Pageable, ajusta 'sort' si es necesario

    // NOTA: El servicio generado `getAllUsers` devuelve `Observable<PageUsuarioDto>`
    // Para simplificar la UI por ahora, extraeremos solo el contenido.
    // En una implementación completa, querrías manejar la paginación (botones de siguiente/anterior, etc.)
    this.users$ = new Observable<UsuarioDto[]>(observer => {
      this.usuarioService.getAllUsers(pageable).subscribe({
        next: (page) => {
          observer.next(page.content || []);
          observer.complete();
        },
        error: (err) => {
          this.error = 'Error al cargar los usuarios.';
          console.error(err);
          observer.error(err);
        }
      });
    });

    // Si quisieras usar el PageUsuarioDto directamente:
    // this.usersPage$ = this.usuarioService.getAllUsers({ pageable }).pipe(
    //   catchError(err => {
    //     this.error = 'Error al cargar los usuarios.';
    //     console.error(err);
    //     return of({ content: [], totalElements: 0, totalPages: 0, number: 0, size: 0 }); // o un Page vacío
    //   })
    // );
  }

  deleteUser(id: number | undefined): void {
    if (id === undefined) {
      this.error = 'No se puede eliminar un usuario sin ID.';
      return;
    }
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.usuarioService.deletUser(id).subscribe({
        next: () => {
          this.error = null;
          this.loadUsers(); // Recarga la lista de usuarios
        },
        error: (err) => {
          this.error = 'Error al eliminar el usuario.';
          console.error(err);
        }
      });
    }
  }
}

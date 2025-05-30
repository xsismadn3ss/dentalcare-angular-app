/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CitaDto } from '../models/CitaDto';
import type { PacienteCreateRequest } from '../models/PacienteCreateRequest';
import type { PacienteDto } from '../models/PacienteDto';
import type { PacienteFilterRequest } from '../models/PacienteFilterRequest';
import type { PacienteUpdateRequest } from '../models/PacienteUpdateRequest';
import type { Pageable } from '../models/Pageable';
import type { PagePacienteDto } from '../models/PagePacienteDto';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class PacienteControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public getPaciente(
        id: number,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/paciente/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public updatePaciente(
        id: number,
        requestBody: PacienteUpdateRequest,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/g5/api/v1/paciente/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public deletePaciente(
        id: number,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/g5/api/v1/paciente/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param pageable
     * @returns PagePacienteDto OK
     * @throws ApiError
     */
    public getAllPacientes(
        pageable: Pageable,
    ): Observable<PagePacienteDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/paciente',
            query: {
                'pageable': pageable,
            },
        });
    }
    /**
     * @param payload
     * @returns PacienteDto OK
     * @throws ApiError
     */
    public addPaciente(
        payload: PacienteCreateRequest,
    ): Observable<PacienteDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/g5/api/v1/paciente',
            query: {
                'payload': payload,
            },
        });
    }
    /**
     * @param payload
     * @returns PacienteDto OK
     * @throws ApiError
     */
    public fliterPacientes(
        payload: PacienteFilterRequest,
    ): Observable<Array<PacienteDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/paciente/filter',
            query: {
                'payload': payload,
            },
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitas1(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/paciente/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitas4(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/g5/api/v1/paciente/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitas3(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/g5/api/v1/paciente/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitas6(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/g5/api/v1/paciente/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitas7(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'OPTIONS',
            url: '/g5/api/v1/paciente/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitas2(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'HEAD',
            url: '/g5/api/v1/paciente/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitas5(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'PATCH',
            url: '/g5/api/v1/paciente/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
}

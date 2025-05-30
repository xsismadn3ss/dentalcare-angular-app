/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CitaCreateRequest } from '../models/CitaCreateRequest';
import type { CitaDto } from '../models/CitaDto';
import type { CitaUpdateRequest } from '../models/CitaUpdateRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class CitaControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitaById(
        id: number,
    ): Observable<CitaDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/cita/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns CitaDto OK
     * @throws ApiError
     */
    public updateCita(
        id: number,
        requestBody: CitaUpdateRequest,
    ): Observable<CitaDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/cita/{id}',
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
    public deleteCita(
        id: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/cita/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getAllCitas(): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/cita',
        });
    }
    /**
     * @param requestBody
     * @returns CitaDto OK
     * @throws ApiError
     */
    public createCita(
        requestBody: CitaCreateRequest,
    ): Observable<CitaDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/cita',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns CitaDto OK
     * @throws ApiError
     */
    public getCitasByPacienteId(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/paciente/{id}/citas',
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
    public getCitasByDoctorId(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/doctor/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
}

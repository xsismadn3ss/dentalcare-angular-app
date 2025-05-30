/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { CitaDto } from '../models/CitaDto';
import type { DoctorCreateRequest } from '../models/DoctorCreateRequest';
import type { DoctorDto } from '../models/DoctorDto';
import type { DoctorFilterRequest } from '../models/DoctorFilterRequest';
import type { DoctorUpdateRequest } from '../models/DoctorUpdateRequest';
import type { EspecialidadDto } from '../models/EspecialidadDto';
import type { Pageable } from '../models/Pageable';
import type { PageDoctorDto } from '../models/PageDoctorDto';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class DoctorControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public getDoctor(
        id: number,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/doctor/{id}',
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
    public updateDoctor(
        id: number,
        requestBody: DoctorUpdateRequest,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/g5/api/v1/doctor/{id}',
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
    public deleteDoctor(
        id: number,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/g5/api/v1/doctor/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param pageable
     * @returns PageDoctorDto OK
     * @throws ApiError
     */
    public getAllDoctors(
        pageable: Pageable,
    ): Observable<PageDoctorDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/doctor',
            query: {
                'pageable': pageable,
            },
        });
    }
    /**
     * @param requestBody
     * @returns DoctorDto OK
     * @throws ApiError
     */
    public addDoctor(
        requestBody: DoctorCreateRequest,
    ): Observable<DoctorDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/g5/api/v1/doctor',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns DoctorDto OK
     * @throws ApiError
     */
    public filterDoctors(
        requestBody: DoctorFilterRequest,
    ): Observable<Array<DoctorDto>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/g5/api/v1/doctor/filter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns EspecialidadDto OK
     * @throws ApiError
     */
    public getEspecialidad(
        id: number,
    ): Observable<EspecialidadDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/doctor/{id}/especialidad',
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
    public getCitas(
        id: number,
    ): Observable<Array<CitaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/doctor/{id}/citas',
            path: {
                'id': id,
            },
        });
    }
}

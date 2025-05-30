/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { RolCreateRequest } from '../models/RolCreateRequest';
import type { RolDto } from '../models/RolDto';
import type { RolFilterRequest } from '../models/RolFilterRequest';
import type { RolPermisoDto } from '../models/RolPermisoDto';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class RolControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @returns RolDto OK
     * @throws ApiError
     */
    public getRolById(
        id: number,
    ): Observable<RolDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/rol/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns RolDto OK
     * @throws ApiError
     */
    public updateRol(
        id: number,
        requestBody: RolCreateRequest,
    ): Observable<RolDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/rol/{id}',
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
    public deleteRol(
        id: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/rol/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns RolDto OK
     * @throws ApiError
     */
    public getAllRoles(): Observable<Array<RolDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/rol',
        });
    }
    /**
     * @param requestBody
     * @returns RolDto OK
     * @throws ApiError
     */
    public createRol(
        requestBody: RolCreateRequest,
    ): Observable<RolDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/rol',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns RolDto OK
     * @throws ApiError
     */
    public filterRoles(
        requestBody: RolFilterRequest,
    ): Observable<Array<RolDto>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/rol/filter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns RolPermisoDto OK
     * @throws ApiError
     */
    public getRolPermisos(
        id: number,
    ): Observable<Array<RolPermisoDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/rol/{id}/permisos',
            path: {
                'id': id,
            },
        });
    }
}

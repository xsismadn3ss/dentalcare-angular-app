/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { RolPermisoCreateRequest } from '../models/RolPermisoCreateRequest';
import type { RolPermisoDto } from '../models/RolPermisoDto';
import type { RolPermisoFilterRequest } from '../models/RolPermisoFilterRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class RolPermisoControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @returns RolPermisoDto OK
     * @throws ApiError
     */
    public getRolPermisoById(
        id: number,
    ): Observable<RolPermisoDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/rolper/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns RolPermisoDto OK
     * @throws ApiError
     */
    public updateRolPermiso(
        id: number,
        requestBody: RolPermisoCreateRequest,
    ): Observable<RolPermisoDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/rolper/{id}',
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
    public deleteRolPermiso(
        id: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/rolper/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns RolPermisoDto OK
     * @throws ApiError
     */
    public getAllRolPermisos(): Observable<Array<RolPermisoDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/rolper',
        });
    }
    /**
     * @param requestBody
     * @returns RolPermisoDto OK
     * @throws ApiError
     */
    public createRolPermiso(
        requestBody: RolPermisoCreateRequest,
    ): Observable<RolPermisoDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/rolper',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns RolPermisoDto OK
     * @throws ApiError
     */
    public filterRolPermiso(
        requestBody: RolPermisoFilterRequest,
    ): Observable<Array<RolPermisoDto>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/rolper/filter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

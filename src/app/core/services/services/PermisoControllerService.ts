/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { PermisoCreateRequest } from '../models/PermisoCreateRequest';
import type { PermisoDto } from '../models/PermisoDto';
import type { PermisoFilterRequest } from '../models/PermisoFilterRequest';
import type { PermisoUpdateRequest } from '../models/PermisoUpdateRequest';
import type { RolPermisoDto } from '../models/RolPermisoDto';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class PermisoControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @returns PermisoDto OK
     * @throws ApiError
     */
    public getPermisoById(
        id: number,
    ): Observable<PermisoDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/permiso/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns PermisoDto OK
     * @throws ApiError
     */
    public updatePermiso(
        id: number,
        requestBody: PermisoUpdateRequest,
    ): Observable<PermisoDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/permiso/{id}',
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
    public deletePermiso(
        id: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/permiso/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns PermisoDto OK
     * @throws ApiError
     */
    public getAllPermisos(): Observable<Array<PermisoDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/permiso',
        });
    }
    /**
     * @param requestBody
     * @returns PermisoDto OK
     * @throws ApiError
     */
    public createPermiso(
        requestBody: PermisoCreateRequest,
    ): Observable<PermisoDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/permiso',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns PermisoDto OK
     * @throws ApiError
     */
    public filterPermisos(
        requestBody: PermisoFilterRequest,
    ): Observable<Array<PermisoDto>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/permiso/filter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns RolPermisoDto OK
     * @throws ApiError
     */
    public getRolPermisos1(
        id: number,
    ): Observable<Array<RolPermisoDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/permiso/{id}/rolpermisos',
            path: {
                'id': id,
            },
        });
    }
}

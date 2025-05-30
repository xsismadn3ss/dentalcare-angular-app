/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { DoctorDto } from '../models/DoctorDto';
import type { PacienteDto } from '../models/PacienteDto';
import type { Pageable } from '../models/Pageable';
import type { PageUsuarioDto } from '../models/PageUsuarioDto';
import type { RolDto } from '../models/RolDto';
import type { UsuarioCreateRequest } from '../models/UsuarioCreateRequest';
import type { UsuarioDto } from '../models/UsuarioDto';
import type { UsuarioFilterRequest } from '../models/UsuarioFilterRequest';
import type { UsuarioUpdateRequest } from '../models/UsuarioUpdateRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class UsuarioControllerService {
    private authToken: string | null;

    constructor(public readonly http: HttpClient) {
        this.authToken = localStorage.getItem('authToken');
    }
    /**
     * @param id
     * @returns UsuarioDto OK
     * @throws ApiError
     */
    public getUser(
        id: number,
    ): Observable<UsuarioDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/usuario/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns UsuarioDto OK
     * @throws ApiError
     */
    public updateUser(
        id: number,
        requestBody: UsuarioUpdateRequest,
    ): Observable<UsuarioDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/g5/api/v1/usuario/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public deletUser(
        id: number,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/g5/api/v1/usuario/{id}',
            path: {
                'id': id,
            },
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
    /**
     * @param pageable
     * @returns PageUsuarioDto OK
     * @throws ApiError
     */
    public getAllUsers(
        pageable: Pageable,
    ): Observable<PageUsuarioDto> {
        console.log(this.authToken, "token de accesso")
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/usuario',
            query: {
                'page': pageable.page,
                'size': pageable.size,
                // 'sort': pageable.sort
            },
            mediaType: 'application/json',
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public addUser(
        requestBody: UsuarioCreateRequest,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/g5/api/v1/usuario',
            body: requestBody,
            mediaType: 'application/json',
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
    /**
     * @param requestBody
     * @returns UsuarioDto OK
     * @throws ApiError
     */
    public filterUsers(
        requestBody: UsuarioFilterRequest,
    ): Observable<Array<UsuarioDto>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/g5/api/v1/usuario/filter',
            body: requestBody,
            mediaType: 'application/json',
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
    /**
     * @param id
     * @returns RolDto OK
     * @throws ApiError
     */
    public getUserRol(
        id: number,
    ): Observable<RolDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/usuario/{id}/rol',
            path: {
                'id': id,
            },
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
    /**
     * @param id
     * @returns PacienteDto OK
     * @throws ApiError
     */
    public getPacienteProfile(
        id: number,
    ): Observable<PacienteDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/usuario/{id}/paciente',
            path: {
                'id': id,
            },
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
    /**
     * @param id
     * @returns DoctorDto OK
     * @throws ApiError
     */
    public getDoctorProfile(
        id: number,
    ): Observable<DoctorDto> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/g5/api/v1/usuario/{id}/doctor',
            path: {
                'id': id,
            },
            headers:{
                "Authorization": "Bearer " + this.authToken
            }
        });
    }
}

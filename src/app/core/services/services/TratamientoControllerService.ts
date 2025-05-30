/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { TratamientoCreateRequest } from '../models/TratamientoCreateRequest';
import type { TratamientoDto } from '../models/TratamientoDto';
import type { TratamientoUpdateRequest } from '../models/TratamientoUpdateRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class TratamientoControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @param tratamientoId
     * @param requestBody
     * @returns TratamientoDto OK
     * @throws ApiError
     */
    public updateTratamiento(
        id: number,
        tratamientoId: number,
        requestBody: TratamientoUpdateRequest,
    ): Observable<TratamientoDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/cita/{id}/tratamiento/{tratamientoId}',
            path: {
                'id': id,
                'tratamientoId': tratamientoId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param tratamientoId
     * @returns any OK
     * @throws ApiError
     */
    public deleteTratamiento(
        id: number,
        tratamientoId: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/cita/{id}/tratamiento/{tratamientoId}',
            path: {
                'id': id,
                'tratamientoId': tratamientoId,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns TratamientoDto OK
     * @throws ApiError
     */
    public createTratamiento(
        id: number,
        requestBody: TratamientoCreateRequest,
    ): Observable<TratamientoDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/cita/{id}/tratamiento',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns TratamientoDto OK
     * @throws ApiError
     */
    public getTratamientosByCita(
        id: number,
    ): Observable<Array<TratamientoDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/cita/{id}/tratamientos',
            path: {
                'id': id,
            },
        });
    }
}

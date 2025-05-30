/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { NotaCreateRequest } from '../models/NotaCreateRequest';
import type { NotaDto } from '../models/NotaDto';
import type { NotaUpdateRequest } from '../models/NotaUpdateRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class NotaControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param id
     * @param notaId
     * @param requestBody
     * @returns NotaDto OK
     * @throws ApiError
     */
    public updateNota(
        id: number,
        notaId: number,
        requestBody: NotaUpdateRequest,
    ): Observable<NotaDto> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/api/cita/{id}/nota/{notaId}',
            path: {
                'id': id,
                'notaId': notaId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param notaId
     * @returns any OK
     * @throws ApiError
     */
    public deleteNota(
        id: number,
        notaId: number,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/api/cita/{id}/nota/{notaId}',
            path: {
                'id': id,
                'notaId': notaId,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns NotaDto OK
     * @throws ApiError
     */
    public createNota(
        id: number,
        requestBody: NotaCreateRequest,
    ): Observable<NotaDto> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/api/cita/{id}/nota',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns NotaDto OK
     * @throws ApiError
     */
    public getNotasByCita(
        id: number,
    ): Observable<Array<NotaDto>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/api/cita/{id}/notas',
            path: {
                'id': id,
            },
        });
    }
}

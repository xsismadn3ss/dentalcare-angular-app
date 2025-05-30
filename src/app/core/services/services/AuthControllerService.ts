/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { LoginRequest } from '../models/LoginRequest';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
    providedIn: 'root',
})
export class AuthControllerService {
    constructor(public readonly http: HttpClient) {}
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public login(
        requestBody: LoginRequest,
    ): Observable<Record<string, any>> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/g5/api/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

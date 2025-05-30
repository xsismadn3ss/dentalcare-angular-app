/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageableObject } from './PageableObject';
import type { SortObject } from './SortObject';
import type { UsuarioDto } from './UsuarioDto';
export type PageUsuarioDto = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<UsuarioDto>;
    number?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
};


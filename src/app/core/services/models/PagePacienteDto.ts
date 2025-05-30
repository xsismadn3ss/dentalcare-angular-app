/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PacienteDto } from './PacienteDto';
import type { PageableObject } from './PageableObject';
import type { SortObject } from './SortObject';
export type PagePacienteDto = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<PacienteDto>;
    number?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
};


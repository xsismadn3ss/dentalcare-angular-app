/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DoctorDto } from './DoctorDto';
import type { PageableObject } from './PageableObject';
import type { SortObject } from './SortObject';
export type PageDoctorDto = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<DoctorDto>;
    number?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
};


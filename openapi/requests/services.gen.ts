// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { GetAuthGoogleResponse, GetAuthGoogleCallbackResponse, PostAuthRefreshResponse, GetMoviesData, GetMoviesResponse, PostMoviesData, PostMoviesResponse, GetMoviesByIdData, GetMoviesByIdResponse, PostMoviesByIdAvailabilityData, PostMoviesByIdAvailabilityResponse, PostMoviesByIdAvailabilityVoteData, PostMoviesByIdAvailabilityVoteResponse, GetStreamingServicesData, GetStreamingServicesResponse, PostStreamingServicesData, PostStreamingServicesResponse, GetStreamingServicesByIdData, GetStreamingServicesByIdResponse, PostApplicationsData, PostApplicationsResponse, GetApplicationsResponse, GetApplicationsByIdData, GetApplicationsByIdResponse, DeleteApplicationsByIdData, DeleteApplicationsByIdResponse, PostApplicationsByIdApiKeysData, PostApplicationsByIdApiKeysResponse, PatchApplicationsByIdApiKeysByKeyData, PatchApplicationsByIdApiKeysByKeyResponse, DeleteApplicationsByIdApiKeysByKeyData, DeleteApplicationsByIdApiKeysByKeyResponse } from './types.gen';

export class DefaultService {
    /**
     * @returns unknown
     * @throws ApiError
     */
    public static getAuthGoogle(): CancelablePromise<GetAuthGoogleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/google'
        });
    }
    
    /**
     * @returns unknown
     * @throws ApiError
     */
    public static getAuthGoogleCallback(): CancelablePromise<GetAuthGoogleCallbackResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/google/callback'
        });
    }
    
    /**
     * @returns unknown
     * @throws ApiError
     */
    public static postAuthRefresh(): CancelablePromise<PostAuthRefreshResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh'
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.country
     * @returns GetMoviesDto
     * @throws ApiError
     */
    public static getMovies(data: GetMoviesData): CancelablePromise<GetMoviesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies',
            query: {
                country: data.country
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.requestBody
     * @returns MovieDto
     * @throws ApiError
     */
    public static postMovies(data: PostMoviesData): CancelablePromise<PostMoviesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/movies',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @param data.country
     * @returns MovieDto
     * @throws ApiError
     */
    public static getMoviesById(data: GetMoviesByIdData): CancelablePromise<GetMoviesByIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/movies/{id}',
            path: {
                id: data.id
            },
            query: {
                country: data.country
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @param data.requestBody
     * @returns MovieDto
     * @throws ApiError
     */
    public static postMoviesByIdAvailability(data: PostMoviesByIdAvailabilityData): CancelablePromise<PostMoviesByIdAvailabilityResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/movies/{id}/availability',
            path: {
                id: data.id
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.requestBody
     * @returns VoteResponseDto
     * @throws ApiError
     */
    public static postMoviesByIdAvailabilityVote(data: PostMoviesByIdAvailabilityVoteData): CancelablePromise<PostMoviesByIdAvailabilityVoteResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/movies/{id}/availability/vote',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.country
     * @returns GetStreamingServicesDto
     * @throws ApiError
     */
    public static getStreamingServices(data: GetStreamingServicesData): CancelablePromise<GetStreamingServicesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/streaming-services',
            query: {
                country: data.country
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.requestBody
     * @returns StreamingServiceDto
     * @throws ApiError
     */
    public static postStreamingServices(data: PostStreamingServicesData): CancelablePromise<PostStreamingServicesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/streaming-services',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @param data.country
     * @returns StreamingServiceDto
     * @throws ApiError
     */
    public static getStreamingServicesById(data: GetStreamingServicesByIdData): CancelablePromise<GetStreamingServicesByIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/streaming-services/{id}',
            path: {
                id: data.id
            },
            query: {
                country: data.country
            }
        });
    }
    
}

export class ApplicationsService {
    /**
     * @param data The data for the request.
     * @param data.requestBody
     * @returns ApplicationDto
     * @throws ApiError
     */
    public static postApplications(data: PostApplicationsData): CancelablePromise<PostApplicationsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/applications',
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * @returns GetApplicationsDto
     * @throws ApiError
     */
    public static getApplications(): CancelablePromise<GetApplicationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applications'
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @returns unknown
     * @throws ApiError
     */
    public static getApplicationsById(data: GetApplicationsByIdData): CancelablePromise<GetApplicationsByIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/applications/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @returns unknown
     * @throws ApiError
     */
    public static deleteApplicationsById(data: DeleteApplicationsByIdData): CancelablePromise<DeleteApplicationsByIdResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applications/{id}',
            path: {
                id: data.id
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @param data.requestBody
     * @returns ApiKeyDto
     * @throws ApiError
     */
    public static postApplicationsByIdApiKeys(data: PostApplicationsByIdApiKeysData): CancelablePromise<PostApplicationsByIdApiKeysResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/applications/{id}/api-keys',
            path: {
                id: data.id
            },
            body: data.requestBody,
            mediaType: 'application/json'
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @param data.key
     * @returns ApiKeyDto
     * @throws ApiError
     */
    public static patchApplicationsByIdApiKeysByKey(data: PatchApplicationsByIdApiKeysByKeyData): CancelablePromise<PatchApplicationsByIdApiKeysByKeyResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/applications/{id}/api-keys/{key}',
            path: {
                id: data.id,
                key: data.key
            }
        });
    }
    
    /**
     * @param data The data for the request.
     * @param data.id
     * @param data.key
     * @returns unknown
     * @throws ApiError
     */
    public static deleteApplicationsByIdApiKeysByKey(data: DeleteApplicationsByIdApiKeysByKeyData): CancelablePromise<DeleteApplicationsByIdApiKeysByKeyResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/applications/{id}/api-keys/{key}',
            path: {
                id: data.id,
                key: data.key
            }
        });
    }
    
}
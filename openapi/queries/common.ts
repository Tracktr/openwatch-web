// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { ApplicationsService, DefaultService } from "../requests/services.gen";
export type DefaultServiceGetAuthGoogleDefaultResponse = Awaited<ReturnType<typeof DefaultService.getAuthGoogle>>;
export type DefaultServiceGetAuthGoogleQueryResult<TData = DefaultServiceGetAuthGoogleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetAuthGoogleKey = "DefaultServiceGetAuthGoogle";
export const UseDefaultServiceGetAuthGoogleKeyFn = (queryKey?: Array<unknown>) => [useDefaultServiceGetAuthGoogleKey, ...(queryKey ?? [])];
export type DefaultServiceGetAuthGoogleCallbackDefaultResponse = Awaited<ReturnType<typeof DefaultService.getAuthGoogleCallback>>;
export type DefaultServiceGetAuthGoogleCallbackQueryResult<TData = DefaultServiceGetAuthGoogleCallbackDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetAuthGoogleCallbackKey = "DefaultServiceGetAuthGoogleCallback";
export const UseDefaultServiceGetAuthGoogleCallbackKeyFn = (queryKey?: Array<unknown>) => [useDefaultServiceGetAuthGoogleCallbackKey, ...(queryKey ?? [])];
export type DefaultServiceGetMoviesDefaultResponse = Awaited<ReturnType<typeof DefaultService.getMovies>>;
export type DefaultServiceGetMoviesQueryResult<TData = DefaultServiceGetMoviesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetMoviesKey = "DefaultServiceGetMovies";
export const UseDefaultServiceGetMoviesKeyFn = ({ country }: {
  country: string;
}, queryKey?: Array<unknown>) => [useDefaultServiceGetMoviesKey, ...(queryKey ?? [{ country }])];
export type DefaultServiceGetMoviesByIdDefaultResponse = Awaited<ReturnType<typeof DefaultService.getMoviesById>>;
export type DefaultServiceGetMoviesByIdQueryResult<TData = DefaultServiceGetMoviesByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetMoviesByIdKey = "DefaultServiceGetMoviesById";
export const UseDefaultServiceGetMoviesByIdKeyFn = ({ country, id }: {
  country: string;
  id: number;
}, queryKey?: Array<unknown>) => [useDefaultServiceGetMoviesByIdKey, ...(queryKey ?? [{ country, id }])];
export type DefaultServiceGetStreamingServicesDefaultResponse = Awaited<ReturnType<typeof DefaultService.getStreamingServices>>;
export type DefaultServiceGetStreamingServicesQueryResult<TData = DefaultServiceGetStreamingServicesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetStreamingServicesKey = "DefaultServiceGetStreamingServices";
export const UseDefaultServiceGetStreamingServicesKeyFn = ({ country }: {
  country: string;
}, queryKey?: Array<unknown>) => [useDefaultServiceGetStreamingServicesKey, ...(queryKey ?? [{ country }])];
export type DefaultServiceGetStreamingServicesByIdDefaultResponse = Awaited<ReturnType<typeof DefaultService.getStreamingServicesById>>;
export type DefaultServiceGetStreamingServicesByIdQueryResult<TData = DefaultServiceGetStreamingServicesByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetStreamingServicesByIdKey = "DefaultServiceGetStreamingServicesById";
export const UseDefaultServiceGetStreamingServicesByIdKeyFn = ({ country, id }: {
  country: string;
  id: number;
}, queryKey?: Array<unknown>) => [useDefaultServiceGetStreamingServicesByIdKey, ...(queryKey ?? [{ country, id }])];
export type ApplicationsServiceGetApplicationsDefaultResponse = Awaited<ReturnType<typeof ApplicationsService.getApplications>>;
export type ApplicationsServiceGetApplicationsQueryResult<TData = ApplicationsServiceGetApplicationsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useApplicationsServiceGetApplicationsKey = "ApplicationsServiceGetApplications";
export const UseApplicationsServiceGetApplicationsKeyFn = (queryKey?: Array<unknown>) => [useApplicationsServiceGetApplicationsKey, ...(queryKey ?? [])];
export type ApplicationsServiceGetApplicationsByIdDefaultResponse = Awaited<ReturnType<typeof ApplicationsService.getApplicationsById>>;
export type ApplicationsServiceGetApplicationsByIdQueryResult<TData = ApplicationsServiceGetApplicationsByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useApplicationsServiceGetApplicationsByIdKey = "ApplicationsServiceGetApplicationsById";
export const UseApplicationsServiceGetApplicationsByIdKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useApplicationsServiceGetApplicationsByIdKey, ...(queryKey ?? [{ id }])];
export type DefaultServicePostAuthRefreshMutationResult = Awaited<ReturnType<typeof DefaultService.postAuthRefresh>>;
export type DefaultServicePostMoviesMutationResult = Awaited<ReturnType<typeof DefaultService.postMovies>>;
export type DefaultServicePostMoviesByIdAvailabilityMutationResult = Awaited<ReturnType<typeof DefaultService.postMoviesByIdAvailability>>;
export type DefaultServicePostMoviesByIdAvailabilityVoteMutationResult = Awaited<ReturnType<typeof DefaultService.postMoviesByIdAvailabilityVote>>;
export type DefaultServicePostStreamingServicesMutationResult = Awaited<ReturnType<typeof DefaultService.postStreamingServices>>;
export type ApplicationsServicePostApplicationsMutationResult = Awaited<ReturnType<typeof ApplicationsService.postApplications>>;
export type ApplicationsServicePostApplicationsByIdApiKeysMutationResult = Awaited<ReturnType<typeof ApplicationsService.postApplicationsByIdApiKeys>>;
export type ApplicationsServicePatchApplicationsByIdApiKeysByKeyMutationResult = Awaited<ReturnType<typeof ApplicationsService.patchApplicationsByIdApiKeysByKey>>;
export type ApplicationsServiceDeleteApplicationsByIdMutationResult = Awaited<ReturnType<typeof ApplicationsService.deleteApplicationsById>>;
export type ApplicationsServiceDeleteApplicationsByIdApiKeysByKeyMutationResult = Awaited<ReturnType<typeof ApplicationsService.deleteApplicationsByIdApiKeysByKey>>;

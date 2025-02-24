// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryResult } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
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
export type DefaultServiceGetApplicationsDefaultResponse = Awaited<ReturnType<typeof DefaultService.getApplications>>;
export type DefaultServiceGetApplicationsQueryResult<TData = DefaultServiceGetApplicationsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetApplicationsKey = "DefaultServiceGetApplications";
export const UseDefaultServiceGetApplicationsKeyFn = (queryKey?: Array<unknown>) => [useDefaultServiceGetApplicationsKey, ...(queryKey ?? [])];
export type DefaultServiceGetApplicationsByIdDefaultResponse = Awaited<ReturnType<typeof DefaultService.getApplicationsById>>;
export type DefaultServiceGetApplicationsByIdQueryResult<TData = DefaultServiceGetApplicationsByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetApplicationsByIdKey = "DefaultServiceGetApplicationsById";
export const UseDefaultServiceGetApplicationsByIdKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useDefaultServiceGetApplicationsByIdKey, ...(queryKey ?? [{ id }])];
export type DefaultServicePostAuthRefreshMutationResult = Awaited<ReturnType<typeof DefaultService.postAuthRefresh>>;
export type DefaultServicePostMoviesMutationResult = Awaited<ReturnType<typeof DefaultService.postMovies>>;
export type DefaultServicePostStreamingServicesMutationResult = Awaited<ReturnType<typeof DefaultService.postStreamingServices>>;
export type DefaultServicePostApplicationsMutationResult = Awaited<ReturnType<typeof DefaultService.postApplications>>;

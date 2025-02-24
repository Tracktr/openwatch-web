// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
export const useDefaultServiceGetAuthGoogleSuspense = <TData = Common.DefaultServiceGetAuthGoogleDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetAuthGoogleKeyFn(queryKey), queryFn: () => DefaultService.getAuthGoogle() as TData, ...options });
export const useDefaultServiceGetAuthGoogleCallbackSuspense = <TData = Common.DefaultServiceGetAuthGoogleCallbackDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetAuthGoogleCallbackKeyFn(queryKey), queryFn: () => DefaultService.getAuthGoogleCallback() as TData, ...options });
export const useDefaultServiceGetMoviesSuspense = <TData = Common.DefaultServiceGetMoviesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country }: {
  country: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetMoviesKeyFn({ country }, queryKey), queryFn: () => DefaultService.getMovies({ country }) as TData, ...options });
export const useDefaultServiceGetMoviesByIdSuspense = <TData = Common.DefaultServiceGetMoviesByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country, id }: {
  country: string;
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetMoviesByIdKeyFn({ country, id }, queryKey), queryFn: () => DefaultService.getMoviesById({ country, id }) as TData, ...options });
export const useDefaultServiceGetStreamingServicesSuspense = <TData = Common.DefaultServiceGetStreamingServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country }: {
  country: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetStreamingServicesKeyFn({ country }, queryKey), queryFn: () => DefaultService.getStreamingServices({ country }) as TData, ...options });
export const useDefaultServiceGetStreamingServicesByIdSuspense = <TData = Common.DefaultServiceGetStreamingServicesByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country, id }: {
  country: string;
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetStreamingServicesByIdKeyFn({ country, id }, queryKey), queryFn: () => DefaultService.getStreamingServicesById({ country, id }) as TData, ...options });
export const useDefaultServiceGetApplicationsSuspense = <TData = Common.DefaultServiceGetApplicationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetApplicationsKeyFn(queryKey), queryFn: () => DefaultService.getApplications() as TData, ...options });
export const useDefaultServiceGetApplicationsByIdSuspense = <TData = Common.DefaultServiceGetApplicationsByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetApplicationsByIdKeyFn({ id }, queryKey), queryFn: () => DefaultService.getApplicationsById({ id }) as TData, ...options });

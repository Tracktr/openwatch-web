// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { ApplicationsService, DefaultService } from "../requests/services.gen";
import { AddMovieAvailabilityDto, CreateApiKeyDto, CreateApplicationDto, CreateMovieDto, CreateStreamingServiceDto, VoteAvailabilityDto } from "../requests/types.gen";
import * as Common from "./common";
export const useDefaultServiceGetAuthGoogle = <TData = Common.DefaultServiceGetAuthGoogleDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetAuthGoogleKeyFn(queryKey), queryFn: () => DefaultService.getAuthGoogle() as TData, ...options });
export const useDefaultServiceGetAuthGoogleCallback = <TData = Common.DefaultServiceGetAuthGoogleCallbackDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetAuthGoogleCallbackKeyFn(queryKey), queryFn: () => DefaultService.getAuthGoogleCallback() as TData, ...options });
export const useDefaultServiceGetMovies = <TData = Common.DefaultServiceGetMoviesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country }: {
  country: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetMoviesKeyFn({ country }, queryKey), queryFn: () => DefaultService.getMovies({ country }) as TData, ...options });
export const useDefaultServiceGetMoviesById = <TData = Common.DefaultServiceGetMoviesByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country, id }: {
  country: string;
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetMoviesByIdKeyFn({ country, id }, queryKey), queryFn: () => DefaultService.getMoviesById({ country, id }) as TData, ...options });
export const useDefaultServiceGetStreamingServices = <TData = Common.DefaultServiceGetStreamingServicesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country }: {
  country: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetStreamingServicesKeyFn({ country }, queryKey), queryFn: () => DefaultService.getStreamingServices({ country }) as TData, ...options });
export const useDefaultServiceGetStreamingServicesById = <TData = Common.DefaultServiceGetStreamingServicesByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ country, id }: {
  country: string;
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceGetStreamingServicesByIdKeyFn({ country, id }, queryKey), queryFn: () => DefaultService.getStreamingServicesById({ country, id }) as TData, ...options });
export const useApplicationsServiceGetApplications = <TData = Common.ApplicationsServiceGetApplicationsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseApplicationsServiceGetApplicationsKeyFn(queryKey), queryFn: () => ApplicationsService.getApplications() as TData, ...options });
export const useApplicationsServiceGetApplicationsById = <TData = Common.ApplicationsServiceGetApplicationsByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseApplicationsServiceGetApplicationsByIdKeyFn({ id }, queryKey), queryFn: () => ApplicationsService.getApplicationsById({ id }) as TData, ...options });
export const useDefaultServicePostAuthRefresh = <TData = Common.DefaultServicePostAuthRefreshMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => DefaultService.postAuthRefresh() as unknown as Promise<TData>, ...options });
export const useDefaultServicePostMovies = <TData = Common.DefaultServicePostMoviesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateMovieDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateMovieDto;
}, TContext>({ mutationFn: ({ requestBody }) => DefaultService.postMovies({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDefaultServicePostMoviesByIdAvailability = <TData = Common.DefaultServicePostMoviesByIdAvailabilityMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: AddMovieAvailabilityDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: AddMovieAvailabilityDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => DefaultService.postMoviesByIdAvailability({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useDefaultServicePostMoviesByIdAvailabilityVote = <TData = Common.DefaultServicePostMoviesByIdAvailabilityVoteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: VoteAvailabilityDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: VoteAvailabilityDto;
}, TContext>({ mutationFn: ({ requestBody }) => DefaultService.postMoviesByIdAvailabilityVote({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDefaultServicePostStreamingServices = <TData = Common.DefaultServicePostStreamingServicesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateStreamingServiceDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateStreamingServiceDto;
}, TContext>({ mutationFn: ({ requestBody }) => DefaultService.postStreamingServices({ requestBody }) as unknown as Promise<TData>, ...options });
export const useApplicationsServicePostApplications = <TData = Common.ApplicationsServicePostApplicationsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateApplicationDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateApplicationDto;
}, TContext>({ mutationFn: ({ requestBody }) => ApplicationsService.postApplications({ requestBody }) as unknown as Promise<TData>, ...options });
export const useApplicationsServicePostApplicationsByIdApiKeys = <TData = Common.ApplicationsServicePostApplicationsByIdApiKeysMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: CreateApiKeyDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: CreateApiKeyDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => ApplicationsService.postApplicationsByIdApiKeys({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useApplicationsServicePatchApplicationsByIdApiKeysByKey = <TData = Common.ApplicationsServicePatchApplicationsByIdApiKeysByKeyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  key: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  key: string;
}, TContext>({ mutationFn: ({ id, key }) => ApplicationsService.patchApplicationsByIdApiKeysByKey({ id, key }) as unknown as Promise<TData>, ...options });
export const useApplicationsServiceDeleteApplicationsById = <TData = Common.ApplicationsServiceDeleteApplicationsByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => ApplicationsService.deleteApplicationsById({ id }) as unknown as Promise<TData>, ...options });
export const useApplicationsServiceDeleteApplicationsByIdApiKeysByKey = <TData = Common.ApplicationsServiceDeleteApplicationsByIdApiKeysByKeyMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  key: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  key: string;
}, TContext>({ mutationFn: ({ id, key }) => ApplicationsService.deleteApplicationsByIdApiKeysByKey({ id, key }) as unknown as Promise<TData>, ...options });

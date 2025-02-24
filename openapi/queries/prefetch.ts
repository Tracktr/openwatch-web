// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseDefaultServiceGetAuthGoogle = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetAuthGoogleKeyFn(), queryFn: () => DefaultService.getAuthGoogle() });
export const prefetchUseDefaultServiceGetAuthGoogleCallback = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetAuthGoogleCallbackKeyFn(), queryFn: () => DefaultService.getAuthGoogleCallback() });
export const prefetchUseDefaultServiceGetMovies = (queryClient: QueryClient, { country }: {
  country: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetMoviesKeyFn({ country }), queryFn: () => DefaultService.getMovies({ country }) });
export const prefetchUseDefaultServiceGetMoviesById = (queryClient: QueryClient, { country, id }: {
  country: string;
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetMoviesByIdKeyFn({ country, id }), queryFn: () => DefaultService.getMoviesById({ country, id }) });
export const prefetchUseDefaultServiceGetStreamingServices = (queryClient: QueryClient, { country }: {
  country: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetStreamingServicesKeyFn({ country }), queryFn: () => DefaultService.getStreamingServices({ country }) });
export const prefetchUseDefaultServiceGetStreamingServicesById = (queryClient: QueryClient, { country, id }: {
  country: string;
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetStreamingServicesByIdKeyFn({ country, id }), queryFn: () => DefaultService.getStreamingServicesById({ country, id }) });
export const prefetchUseDefaultServiceGetApplications = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetApplicationsKeyFn(), queryFn: () => DefaultService.getApplications() });
export const prefetchUseDefaultServiceGetApplicationsById = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceGetApplicationsByIdKeyFn({ id }), queryFn: () => DefaultService.getApplicationsById({ id }) });

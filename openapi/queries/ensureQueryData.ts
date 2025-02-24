// generated with @7nohe/openapi-react-query-codegen@1.6.2 

import { type QueryClient } from "@tanstack/react-query";
import { DefaultService } from "../requests/services.gen";
import * as Common from "./common";
export const ensureUseDefaultServiceGetAuthGoogleData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetAuthGoogleKeyFn(), queryFn: () => DefaultService.getAuthGoogle() });
export const ensureUseDefaultServiceGetAuthGoogleCallbackData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetAuthGoogleCallbackKeyFn(), queryFn: () => DefaultService.getAuthGoogleCallback() });
export const ensureUseDefaultServiceGetMoviesData = (queryClient: QueryClient, { country }: {
  country: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetMoviesKeyFn({ country }), queryFn: () => DefaultService.getMovies({ country }) });
export const ensureUseDefaultServiceGetMoviesByIdData = (queryClient: QueryClient, { country, id }: {
  country: string;
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetMoviesByIdKeyFn({ country, id }), queryFn: () => DefaultService.getMoviesById({ country, id }) });
export const ensureUseDefaultServiceGetStreamingServicesData = (queryClient: QueryClient, { country }: {
  country: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetStreamingServicesKeyFn({ country }), queryFn: () => DefaultService.getStreamingServices({ country }) });
export const ensureUseDefaultServiceGetStreamingServicesByIdData = (queryClient: QueryClient, { country, id }: {
  country: string;
  id: number;
}) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetStreamingServicesByIdKeyFn({ country, id }), queryFn: () => DefaultService.getStreamingServicesById({ country, id }) });
export const ensureUseDefaultServiceGetApplicationsData = (queryClient: QueryClient) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetApplicationsKeyFn(), queryFn: () => DefaultService.getApplications() });
export const ensureUseDefaultServiceGetApplicationsByIdData = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.ensureQueryData({ queryKey: Common.UseDefaultServiceGetApplicationsByIdKeyFn({ id }), queryFn: () => DefaultService.getApplicationsById({ id }) });

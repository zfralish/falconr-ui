import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { Auth } from "@/src/firebase/firebase";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  prepareHeaders: async (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = await Auth.currentUser?.getIdToken();
    if (token) {
      headers.set("authentication", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  // reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQuery,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ["Birds", "Feedings", "Trainings", "Hunts", "Weights"],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
});

export const falconrApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => "test",
  }),
});
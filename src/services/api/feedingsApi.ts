import { api } from "./api";
import { Feeding } from "@/src/models/feeding";

export const feedingsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFeedingById: build.query<Feeding, string>({
      query: (id) => `feedings/${id}`,
      providesTags: (result, error, id) => [{ type: "Feedings", id }],
    }),
    getFeedings: build.query<Feeding[], void>({
      query: () => "feedings",
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Feedings", id } as const)),
              { type: "Feedings", id: "LIST" },
            ]
          : [{ type: "Feedings", id: "LIST" }],
    }),
    upsertFeeding: build.mutation<Feeding, Partial<Feeding>>({
      query(bird) {
        return {
          url: `feedings`,
          method: "POST",
          body: { bird },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Feedings", id }],
    }),
    batchUpsertFeedings: build.mutation<Feeding[], Partial<Feeding>[]>({
      query(feedings) {
        return {
          url: `feedings/batch`,
          method: "POST",
          body: { feedings },
        };
      },
      invalidatesTags: [{ type: "Feedings", id: "LIST" }],
    }),
    deleteFeeding: build.mutation<Feeding, string>({
      query(id) {
        return {
          url: `feedings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Feedings", id }],
    }),
  }),
});

export const {
  useGetFeedingByIdQuery,
  useGetFeedingsQuery,
  useUpsertFeedingMutation,
  useDeleteFeedingMutation,
} = feedingsApi;

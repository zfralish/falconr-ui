import { api } from "./api";
import { Hunt } from "@/src/models/hunt";

export const huntsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHuntById: build.query<Hunt, string>({
      query: (id) => `hunts/${id}`,
      providesTags: (result, error, id) => [{ type: "Hunts", id }],
    }),
    getHunts: build.query<Hunt[], void>({
      query: () => "hunts",
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Hunts", id } as const)),
              { type: "Hunts", id: "LIST" },
            ]
          : [{ type: "Hunts", id: "LIST" }],
    }),
    upsertHunt: build.mutation<Hunt, Partial<Hunt>>({
      query(bird) {
        return {
          url: `hunts`,
          method: "POST",
          body: { bird },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Hunts", id }],
    }),
    batchUpsertHunts: build.mutation<Hunt[], Partial<Hunt>[]>({
      query(hunts) {
        return {
          url: `hunts/batch`,
          method: "POST",
          body: { hunts },
        };
      },
      invalidatesTags: [{ type: "Hunts", id: "LIST" }],
    }),
    deleteHunt: build.mutation<Hunt, string>({
      query(id) {
        return {
          url: `hunts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Hunts", id }],
    }),
  }),
});

export const {
  useGetHuntByIdQuery,
  useGetHuntsQuery,
  useUpsertHuntMutation,
  useDeleteHuntMutation,
} = huntsApi;

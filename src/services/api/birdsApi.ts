import { api } from "./api";
import { Bird } from "@/src/models/bird";

export const birdsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBirdById: build.query<Bird, string>({
      query: (id) => `birds/${id}`,
      providesTags: (result, error, id) => [{ type: "Birds", id }],
    }),
    getBirds: build.query<Bird[], void>({
      query: () => "birds",
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Birds", id } as const)),
              { type: "Birds", id: "LIST" },
            ]
          : [{ type: "Birds", id: "LIST" }],
    }),
    upsertBird: build.mutation<Bird, Partial<Bird>>({
      query(bird) {
        return {
          url: `birds`,
          method: "POST",
          body: { bird },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Birds", id }],
    }),
    batchUpsertBirds: build.mutation<Bird[], Partial<Bird>[]>({
      query(birds) {
        return {
          url: `birds/batch`,
          method: "POST",
          body: { birds },
        };
      },
      invalidatesTags: [{ type: "Birds", id: "LIST" }],
    }),
    deleteBird: build.mutation<Bird, string>({
      query(id) {
        return {
          url: `birds/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Birds", id }],
    }),
  }),
});

export const {
  useGetBirdByIdQuery,
  useGetBirdsQuery,
  useUpsertBirdMutation,
  useDeleteBirdMutation,
} = birdsApi;

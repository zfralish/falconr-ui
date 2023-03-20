import { api } from "./api";
import { Weight } from "@/src/models/weight";

export const weightsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getWeightById: build.query<Weight, string>({
      query: (id) => `weights/${id}`,
      providesTags: (result, error, id) => [{ type: "Weights", id }],
    }),
    getWeights: build.query<Weight[], void>({
      query: () => "weights",
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Weights", id } as const)),
              { type: "Weights", id: "LIST" },
            ]
          : [{ type: "Weights", id: "LIST" }],
    }),
    upsertWeight: build.mutation<Weight, Partial<Weight>>({
      query(bird) {
        return {
          url: `weights`,
          method: "POST",
          body: { bird },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Weights", id }],
    }),
    batchUpsertWeights: build.mutation<Weight[], Partial<Weight>[]>({
      query(weights) {
        return {
          url: `weights/batch`,
          method: "POST",
          body: { weights },
        };
      },
      invalidatesTags: [{ type: "Weights", id: "LIST" }],
    }),
    deleteWeight: build.mutation<Weight, string>({
      query(id) {
        return {
          url: `weights/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Weights", id }],
    }),
  }),
});

export const {
  useGetWeightByIdQuery,
  useGetWeightsQuery,
  useUpsertWeightMutation,
  useDeleteWeightMutation,
} = weightsApi;

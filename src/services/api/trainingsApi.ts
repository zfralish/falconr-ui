import { api } from "./api";
import { Training } from "@/src/models/training";

export const trainingsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTrainingById: build.query<Training, string>({
      query: (id) => `trainings/${id}`,
      providesTags: (result, error, id) => [{ type: "Trainings", id }],
    }),
    getTrainings: build.query<Training[], void>({
      query: () => "trainings",
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Trainings", id } as const)),
              { type: "Trainings", id: "LIST" },
            ]
          : [{ type: "Trainings", id: "LIST" }],
    }),
    upsertTraining: build.mutation<Training, Partial<Training>>({
      query(bird) {
        return {
          url: `trainings`,
          method: "POST",
          body: { bird },
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Trainings", id }],
    }),
    batchUpsertTrainings: build.mutation<Training[], Partial<Training>[]>({
      query(trainings) {
        return {
          url: `trainings/batch`,
          method: "POST",
          body: { trainings },
        };
      },
      invalidatesTags: [{ type: "Trainings", id: "LIST" }],
    }),
    deleteTraining: build.mutation<Training, string>({
      query(id) {
        return {
          url: `trainings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Trainings", id }],
    }),
  }),
});

export const {
  useGetTrainingByIdQuery,
  useGetTrainingsQuery,
  useUpsertTrainingMutation,
  useDeleteTrainingMutation,
} = trainingsApi;

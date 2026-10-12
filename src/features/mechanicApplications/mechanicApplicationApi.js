import { baseApi } from "../../services/api/baseApi";

export const mechanicApplicationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createMechanicApplication: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/mechanic-applications",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["MechanicApplication"],
        }),
    }),
});

export const {
    useCreateMechanicApplicationMutation,
} = mechanicApplicationApi;
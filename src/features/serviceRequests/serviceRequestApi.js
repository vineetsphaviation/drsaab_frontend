import { baseApi } from "../../services/api/baseApi";

export const serviceRequestApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createServiceRequest: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/service-requests",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["ServiceRequest"],
        }),
    }),
});

export const { useCreateServiceRequestMutation } = serviceRequestApi;
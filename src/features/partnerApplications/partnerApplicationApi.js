import { baseApi } from "../../services/api/baseApi";

export const partnerApplicationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPartnerApplication: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/partner-applications",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["PartnerApplication"],
        }),
    }),
});

export const {
    useCreatePartnerApplicationMutation,
} = partnerApplicationApi;
import { baseApi } from "../../services/api/baseApi";

export const contactEnquiryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createContactEnquiry: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/contact-enquiries",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["ContactEnquiry"],
        }),
    }),
});

export const {
    useCreateContactEnquiryMutation,
} = contactEnquiryApi;
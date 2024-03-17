import {
    Query,
    QueryCache,
    QueryClient,
    QueryKey,
} from "@tanstack/react-query";
import { toast } from "./utils/snackbarHelper";
import { AxiosError } from "axios";
import { env } from "./utils/env";
import { toastMessage } from "./constant/string";
console.log('aqui')
export const generateErrorMessage = (
    err: Error,
    query: Query<unknown, unknown, unknown, QueryKey>
) => {
    if (typeof query.meta?.errorMessage === "string") {
        // Support specifying a custom error message via meta.errorMessage. More: https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose#defining-on-demand-messages
        return query.meta.errorMessage;
    }
    const responseStatus = (query.state?.error as AxiosError)?.response
        ?.status as number;
    if (responseStatus === 403) {
        return toastMessage.generics.unauthorizedError;
    }
    return toastMessage.generics.error;
};

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        // This callback is only invoked once per Query per https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
        onError: (err: Error, query) => {
            if (env.VITE_ENVIRONMENT !== "prod") {
                console.error(err);
            }
            toast(generateErrorMessage(err, query), {
                variant: "error",
                preventDuplicate: true,
            });
        },
    }),
});
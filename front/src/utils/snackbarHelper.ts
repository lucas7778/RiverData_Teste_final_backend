import { OptionsWithExtraProps, SnackbarMessage, VariantType } from "notistack";

export const toast = async (
    message: SnackbarMessage,
    options?: OptionsWithExtraProps<VariantType>
) => {
    if (options?.variant === "error") {
        // We will be doing something with the error messages here
        // eslint-disable-next-line no-console
        console.error(message);
    }

    const { enqueueSnackbar } = await import("notistack");

    return enqueueSnackbar(message, options);
};
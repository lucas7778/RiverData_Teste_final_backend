import { z } from "zod";

const environmentNameSchema = z.enum(["local", "dev", "prod"]);

const envSchema = z.object({
  VITE_ENVIRONMENT: environmentNameSchema,
  VITE_API_URL: z.string().min(1),
});

// export const env = envSchema.parse(import.meta.env);

export const env = (() => {
  console.log(import.meta.env);

  return envSchema.parse(import.meta.env);
})();

import { z } from "zod";

export const productIdSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/, "ID must be positive integer")
    .transform(Number),
});

export type productIdSchemaType = z.infer<typeof productIdSchema>;

export const limitAndSkipSchema = z.object({
  limit: z
    .string()
    .regex(/^\d+$/, "limit must be positive integer")
    .optional()
    .default("5")
    .transform(Number),
  skip: z
    .string()
    .regex(/^\d+$/, "skip must be positive integer")
    .optional()
    .default("0")
    .transform(Number),
});

export type limitAndSkipSchemaType = z.infer<typeof limitAndSkipSchema>;

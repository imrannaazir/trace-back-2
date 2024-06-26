import { z } from "zod";

export const registerValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    profile: z
      .object({
        bio: z.string(),
        age: z.number(),
      })
      .optional(),
  }),
});

export const loginValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

export const changePasswordValidationSchema = z.object({
  body: z.object({
    currentPassword: z.string(),
    newPassword: z.string(),
  }),
});

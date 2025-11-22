import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, "Name must be between 2 and 50 characters")
    .max(50, "Name must be between 2 and 50 characters"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
  passwordConfirm: z
    .string({ message: "Password Confirmation is required" })
    .min(1),
});

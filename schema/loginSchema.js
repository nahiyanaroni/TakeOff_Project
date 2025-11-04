import { z } from "zod";

export const loginSchema = z.object({
  // ✅ Email validation
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email format")
    .refine((val) => !val.includes(" "), {
      message: "Email cannot contain spaces",
    }),
// ✅ Password validation
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password cannot exceed 32 characters")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(/[@$!%*?&]/, "Password must include at least one special character"),

  // ✅ Optional “Remember Me” checkbox
  rememberMe: z.boolean().optional(),
});

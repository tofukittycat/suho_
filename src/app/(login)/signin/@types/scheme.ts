import { z } from "zod";

export const SignUpScheme = z
  .object({
    email: z.string().min(1).email("유효한 이메일 주소가 아닙니다."),
    certificationNumber: z.number().min(1).optional(),
    password: z.string().min(1),
    confirmPassword: z.string().min(1),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type SignUpType = z.infer<typeof SignUpScheme>;

import { z } from "zod";

const isValidSender = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{1,5}$/;

export type CharmCreateSchemaType = z.infer<typeof charmCreateSchema>;

export const charmCreateSchema = z.object({
  sender: z
    .string()
    .nonempty("보내는 사람을 입력해주세요.")
    .min(1, {
      message: "1글자 이상 입력해주세요.",
    })
    .max(5, { message: "보내는 사람의 이름은 5글자 이하이어야 합니다." })
    .refine(
      value => isValidSender.test(value),
      "보내는 사람의 이름은 최소 1자리 이상의 한글, 숫자, 영어를 포함해야 합니다.",
    )
    .transform(value => value.toLowerCase()),
  cheers: z
    .string()
    .min(2, {
      message: "2글자 이상 입력해주세요.",
    })
    .max(25, { message: "응원의 문구는 24자 이하이어야 합니다." })
    .nonempty("응원을 입력해주세요."),
});

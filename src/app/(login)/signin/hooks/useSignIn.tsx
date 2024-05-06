import { useRouter } from "next/navigation";

export default function useSignIn() {
  const router = useRouter();

  const handleClickSignUp = () => {
    router.push("signup");
  };

  return {
    handleClickSignUp,
  };
}

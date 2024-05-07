import { useRouter } from "next/navigation";

export default function useSignIn() {
  const router = useRouter();

  const handleGoToSignUp = () => {
    router.push("signup/email");
  };

  return {
    handleGoToSignUp,
  };
}

import { useRouter } from "next/navigation";

export default function useSignIn() {
  const router = useRouter();

  const handleGoToSignUp = () => {
    router.push("signup/email");
  };

  const handleGoToEmail = () => {
    router.push("signin/email");
  };

  const handleEmailSignIn = () => {
    // 로그인 정보가 있으면 홈으로,
    // 아니면 정보입력(생년월일, 이름)화면으로
    router.push("info/date");
  };

  const handleGoToName = () => {
    router.push("name");
  };

  const handleGoToHome = () => {
    router.push("/");
  };

  return {
    router,
    handleGoToSignUp,
    handleGoToEmail,
    handleEmailSignIn,
    handleGoToName,
    handleGoToHome,
  };
}

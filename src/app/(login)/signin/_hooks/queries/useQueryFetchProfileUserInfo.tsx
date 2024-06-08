import useAuth from "@/components/hooks/useAuth";
import { getProfileUserInfo } from "@/services/login/signin";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";

export default function useQueryFetchProfileUserInfo() {
  const { token } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.ProfileUserInfo],
    queryFn: () => getProfileUserInfo(),
    enabled: !isEmpty(token),
  });

  return {
    data,
    isPending,
  };
}

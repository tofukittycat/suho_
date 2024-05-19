import apiClient from "../apiClient";

export const postRequestCertificationNumber = async ({ email }: { email: string }) => {
  return (await apiClient.post("/users/email-request", null, { params: { email } })).data;
};

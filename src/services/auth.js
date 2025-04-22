import { apiClient } from "./config";
export const apiSignup = (payload) => {
  return apiClient.post(payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const apiLogin = async (payload) => {
  apiClient.post(payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

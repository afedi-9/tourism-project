import { apiClient } from "./config";
export const apiSignup = (payload) => {
  return apiClient.post("/api/users/register/tourist", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const apiLogin = async (payload) => {
  apiClient.post("/api/users/login", payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const apiOperatorSignup = (payload) => {
  return apiClient.post("/api/users/register/tour_operator", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const apiOperatorLogin = async (payload) => {
  apiClient.post("/api/users/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

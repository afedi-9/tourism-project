import { apiClient } from "./config";

export const apiAddTour = async (payload) =>
  apiClient.post("/api/tours", payload);

export const apiGetOperatorToursAds = async () =>
  apiClient.get("/api/tours/my-tours");

export const apiGetAllTours = async () => apiClient.get("/api/tours");

export const apiUpdateTour = async (id, payload) =>
  apiClient.patch(`/api/tours/${id}`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  export const apiGetSingleTour = async(id)=> apiClient.get(`/api/tours/${id}`)

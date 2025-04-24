import { apiClient } from "./config";

export const apiAddTour = async (payload) => apiClient.post("/api/tours", payload,);

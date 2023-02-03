import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001"
});

const getAvailableSlots = () => apiClient.get("/available-time-slots");

const bookSlot = (body) => apiClient.post("/events", body);

export  {
  getAvailableSlots,
  bookSlot
};


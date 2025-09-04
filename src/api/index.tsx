import axios, { AxiosInstance } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

// export default api;

// Function to call backend and convert PDF to JPG
export const convertPdfToJpg = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/pdf-to-jpg", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });

    return response.data; // backend should return JPG file data or download link
  } catch (err: any) {
    if (err.response) {
      // Server responded with an error
      console.error("Server error:", err.response.data);
    } else if (err.request) {
      // Request made but no response received
      console.error("No response:", err.request);
    } else {
      // Something else happened
      console.error("Error:", err.message);
    }
  }
};

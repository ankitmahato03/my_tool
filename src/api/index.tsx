import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
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
    });

    return response.data; // backend should return JPG file data or download link
  } catch (error: any) {
    console.error("Error converting PDF to JPG:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};

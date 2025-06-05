import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const generateSOP = async (payload) => {
  const res = await axios.post(`${BASE_URL}/generate`, payload);
  return res.data;
};

export const exportDocx = async (payload) => {
  const res = await axios.post(`${BASE_URL}/export`, payload, {
    responseType: "blob",
  });
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Atria_SOP.docx");
  document.body.appendChild(link);
  link.click();
};

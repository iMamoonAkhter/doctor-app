import axios from "axios";

export const contactFormSubmission = (userData) => {
  return axios.post(
    "http://localhost:5000/api/query/submit",
    userData,
    {
      headers: {
        "Content-Type": "application/json",
      },
}
);
};
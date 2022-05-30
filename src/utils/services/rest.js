import axios from "axios";

import { getRecaptchaToken } from "./recaptcha";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const ENDPOINTS = {
  EVENT_STAGE: "/event-stage",
  REGISTER: "/register",
  postFeedback: "/feedback",
};

export const getEventStage = async () => {
  const { data } = await instance.get(ENDPOINTS.EVENT_STAGE);
  return data;
};

export const postRegistration = async (data) => {
  const recaptchaToken = await getRecaptchaToken();
  await instance.post(ENDPOINTS.REGISTER, data, {
    headers: {
      "x-recaptcha-token": recaptchaToken,
    },
  });
};

export const postFeedback = async (data) => {
  const recaptchaToken = await getRecaptchaToken();
  await instance.post(ENDPOINTS.REGISTER, data, {
    headers: {
      "x-recaptcha-token": recaptchaToken,
    },
  });
};

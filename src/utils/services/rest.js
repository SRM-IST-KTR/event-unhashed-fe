import axios from "axios";

import { getRecaptchaToken } from "./recaptcha";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/v1`,
});

const ENDPOINTS = {
  EVENT_DATA: "/registration/event-data/unhashed",
  REGISTER: "/registration/register/unhashed",
  FEEDBACK: "/feedback/unhashed",
};

export const getEventData = async () => {
  const { data } = await instance.get(ENDPOINTS.EVENT_DATA);
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

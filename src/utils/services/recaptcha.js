import { load } from "recaptcha-v3";

export async function getRecaptchaToken() {
  const recaptcha = await load(process.env.REACT_APP_RECAPTCHA_SITE_KEY);
  const token = await recaptcha.execute("post");

  return token;
}

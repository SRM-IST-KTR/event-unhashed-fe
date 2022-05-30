import { load } from "recaptcha-v3";

export async function getRecaptchaToken() {
    const siteKey = '6LdmbiogAAAAAA40Pk15mIxLjr6OFSN27akiiyN-';
    const recaptcha = await load(siteKey);
    const token = await recaptcha.execute('submit');
  
    return token;
  }
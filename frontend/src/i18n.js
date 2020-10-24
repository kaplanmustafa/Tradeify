import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import { register } from "timeago.js";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "Sign Up": "Sign Up",
        "Password mismatch": "Password mismatch",
        Email: "Email",
        "Name": "Name",
        "Surname": "Surname",
        "Date of Birth": "Date of Birth",
        "month.day.year": "month.day.year (**12.31.1999)",
        Password: "Password",
        "Password Repeat": "Password Repeat",
        "Please verify your email address": "Please verify your email address",
      },
    },
    tr: {
      translations: {
        "Sign Up": "Kaydol",
        "Password mismatch": "Şifreler eşleşmiyor",
        Email: "E-posta",
        "Name": "Ad",
        "Surname": "Soyad",
        "Date of Birth": "Doğum Tarihi",
        "month.day.year": "ay.gün.yıl (**12.31.1999)",
        Password: "Şifre",
        "Password Repeat": "Şifre Tekrar",
        "Please verify your email address":
          "Lütfen e-posta adresinizi doğrulayın",
      },
    },
  },
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

// const timeagoTR = (number, index) => {
//   return [
//     ["az önce", "şimdi"],
//     ["%s saniye önce", "%s saniye içinde"],
//     ["1 dakika önce", "1 dakika içinde"],
//     ["%s dakika önce", "%s dakika içinde"],
//     ["1 saat önce", "1 saat içinde"],
//     ["%s saat önce", "%s saat içinde"],
//     ["1 gün önce", "1 gün içinde"],
//     ["%s gün önce", "%s gün içinde"],
//     ["1 hafta önce", "1 hafta içinde"],
//     ["%s hafta önce", "%s hafta içinde"],
//     ["1 ay önce", "1 ay içinde"],
//     ["%s ay önce", "%s ay içinde"],
//     ["1 yıl önce", "1 yıl içinde"],
//     ["%s yıl önce", "%s yıl içinde"],
//   ][index];
// };
// register("tr", timeagoTR);

export default i18n;

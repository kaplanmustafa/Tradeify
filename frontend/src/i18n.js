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
        Name: "Name",
        Surname: "Surname",
        "Date of Birth": "Date of Birth",
        Phone: "Phone",
        Gender: "Gender",
        Male: "Male",
        Female: "Female",
        Password: "Password",
        "Password Repeat": "Password Repeat",
        "Registration Successful!": "Registration Successful!",
        "Please verify your email address": "Please verify your email address",
        "To login, you must confirm your email!":
          "To login, you must confirm your email!",
        "Incorrect email or password!": "Incorrect email or password!",
        Search: "Search",
        Login: "Login",
        Logout: "Logout",
        "My Profile": "My Profile",
        "Email Verification": "Email Verification",
        "Verification Successful!": "Verification Successful!",
        "You can start using your account": "You can start using your account",
        fruits: "FRUITS",
        "DISCOVER ALL PRODUCTS": "DISCOVER ALL PRODUCTS",
        "Everything came to your house!": "Everything came to your house!",
        TURKEY: "TURKEY",
        Products: "Products",
        "Useful links": "Useful links",
        Contact: "Contact",
        "Add to Cart": "Add to Cart",
        "popular products": "POPULAR PRODUCTS",
        "User Not Found!": "User Not Found!",
        Edit: "Edit",
        Update: "Update",
        Cancel: "Cancel",
        "My User Information": "My User Information",
        "Current Password": "Current Password",
        "New Password": "New Password",
        "New Password Repeat": "New Password Repeat",
        "Delete My Account": "Delete My Account",
        "Update Successful": "Update Successful",
        "Are you sure to delete your account?":
          "Are you sure to delete your account?",
        "Account Deletion Successful": "Account Deletion Successful",
        "Please verify your email address": "Please verify your email address",
        "We do not have such a page but unique opportunities are here!":
          "We do not have such a page but unique opportunities are here!",
        "Go to Homepage": "Go to Homepage",
      },
    },
    tr: {
      translations: {
        "Sign Up": "Kaydol",
        "Password mismatch": "Şifreler eşleşmiyor",
        Email: "E-posta",
        Name: "Ad",
        Surname: "Soyad",
        "Date of Birth": "Doğum Tarihi",
        Phone: "Telefon",
        Gender: "Cinsiyet",
        Male: "Erkek",
        Female: "Kadın",
        Password: "Şifre",
        "Password Repeat": "Şifre Tekrar",
        "Registration Successful!": "Kayıt Başarılı!",
        "Please verify your email address":
          "Lütfen e-posta adresinizi doğrulayın",
        "To login, you must confirm your email!":
          "Giriş yapmak için e-postanızı onaylamalısınız!",
        "Incorrect email or password!": "Yanlış eposta adresi veya şifre!",
        Search: "Ara",
        Login: "Giriş Yap",
        Logout: "Çıkış",
        "My Profile": "Hesabım",
        "Email Verification": "Eposta Doğrulama",
        "Verification Successful!": "Doğrulama Başarılı!",
        "You can start using your account":
          "Hesabınızı kullanmaya başlayabilirsiniz",
        fruits: "MEYVELER",
        "DISCOVER ALL PRODUCTS": "TÜM ÜRÜNLERİ KEŞFET",
        "Everything came to your house!": "Her şey ayağına gelsin!",
        TURKEY: "TÜRKİYE",
        Products: "Ürünler",
        "Useful links": "Faydalı LİNKLER",
        Contact: "İLETİŞİM",
        "Add to Cart": "Sepete Ekle",
        "popular products": "POPÜLER ÜRÜNLER",
        "User Not Found!": "Kullanıcı Bulunamadı!",
        Edit: "Düzenle",
        Update: "Güncelle",
        Cancel: "İptal",
        "My User Information": "Kullanıcı Bilgilerim",
        "Current Password": "Şu Anki Şifre",
        "New Password": "Yeni Şifre",
        "New Password Repeat": "Yeni Şifre Tekrar",
        "Delete My Account": "Hesabımı Sil",
        "Update Successful": "Güncelleme Başarılı",
        "Are you sure to delete your account?":
          "Hesabınızı silmek istediğinizden emin misiniz?",
        "Account Deletion Successful": "Hesap Silme Başarılı",
        "Please verify your email address":
          "Lütfen e-posta adresinizi doğrulayın",
        "We do not have such a page but unique opportunities are here!":
          "Böyle bir sayfamız yok ama benzersiz fırsatlar burada!",
        "Go to Homepage": "Anasayfaya Git",
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

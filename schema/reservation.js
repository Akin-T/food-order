import * as Yup from "yup";

export const reservationSchema = Yup.object().shape({
  fullName: Yup.string().required("İsim Soyisim zorunludur"),
  phoneNumber: Yup.string().required("Telefon numarası zorunludur"),
  email: Yup.string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunludur"),
  persons: Yup.number()
    .required("Kişi sayısı zorunludur")
    .min(1, "En az 1 kişi olmalı"),
  date: Yup.date().required("Tarih zorunludur"),
});

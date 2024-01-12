import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});
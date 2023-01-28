import { object, string, number } from "yup";

export const BILLING_FIELDS = [
  {
    inputId: "firstName",
    label: "First name",
  },
  {
    inputId: "lastName",
    label: "Last name",
  },
  {
    inputId: "address1",
    label: "Address",
  },
  {
    inputId: "postcode",
    label: "Postcode",
  },
  {
    inputId: "city",
    label: "City",
  },
  {
    inputId: "email",
    label: "Email",
  },
  {
    inputId: "phone",
    label: "Phone",
  },
];

export const BILLING_SCHEMA = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  address1: string().required(),
  postcode: number().required().moreThan(1111),
  city: string().required(),
  email: string().required().email(),
  phone: number().required().moreThan(11_111_111),
});

import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  city: yup.string().required(),
  state: yup.string().required(),
  zip_code: yup.string().required(),
  country: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
});

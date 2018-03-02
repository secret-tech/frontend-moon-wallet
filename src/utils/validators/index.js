const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_REGEXP = /^[a-zA-Z0\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;
const NUMBER_REGEXP = /^\d{0,}(\.\d{0,}){0,1}$/;

export const requiredValidator = (msg) =>
  (value) =>
    (value ? '' : msg || 'required');

export const minLength = (limit, msg) =>
  (value) =>
    (limit && value && value.length >= limit ? '' : msg || `minLength ${limit}`);

export const maxLength = (limit, msg) =>
  (value) =>
    (limit && value && value.length <= limit ? '' : msg || `maxLength ${limit}`);

export const minNumber = (limit, msg) =>
  (value) => (limit && value && Number(value) >= limit ? '' : msg || `Min ${limit}`);

export const length = (prop, msg) =>
  (value) =>
    (value && prop && value.length === prop ? '' : msg || `length ${prop}`);

export const email = (msg) =>
  (value) =>
    (value && EMAIL_REGEXP.test(value) ? '' : msg || 'invalid email');

export const password = (msg) =>
  (value) =>
    (value && PASSWORD_REGEXP.test(value) ? '' : msg || 'incorrect password');

export const numberValidator = (msg) =>
  (value) =>
    (value && NUMBER_REGEXP.test(value) ? '' : msg || 'not number');

export const emailValidate = [
  requiredValidator('Email required'),
  email('Invalid email')
];

export const passwordValidate = [
  requiredValidator('Password required'),
  minLength(8, 'Minimum 8 characters'),
  password('Invalid password')
];

export const fullNameValidate = [
  requiredValidator('Name required'),
  minLength(3, 'Minimum 3 characters'),
  maxLength(30, 'Maximum 30 characters')
];

export const required = [
  requiredValidator('This field is required')
];

export const twoFactorCode = [
  minLength(6, 'Require 6 digits'),
  maxLength(6, 'Require 6 digits')
];

export const number = [
  requiredValidator('This field is required'),
  numberValidator('Only numbers')
];

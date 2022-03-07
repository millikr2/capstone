const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateRegisterInput = (data) => {
  let errors = {};

  //checking email
  if (isEmpty(data.email)) {
    errors.email = 'Email field cannot be empty';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  //checking password
  if (isEmpty(data.password)) {
    errors.password = 'Password cannot be empty';
  } else if (!Validator.isLength(data.password, { min: 8, max: 150 })) {
    errors.password = 'Password must be between 8 and 150 characters';
  }

  //checking name
  if (isEmpty(data.name)) {
    errors.name = 'Name cannot be empty';
  } else if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  //check confirm password
  if (isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Confirm password field cannot be empty';
  } else if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Password and confirm password must match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = validateRegisterInput
const isEmail = (v) => {
  let isEmail = String(v)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  return isEmail == null ? "Enter a valid email." : true;
};
const textRequired = (v) => {
  return v.length > 0 ? true : "The field is required.";
};
const passwordValidation = (v) => {
  let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let validPassword = String(v).match(regex);
  return validPassword == null
    ? "Password must have at least one number and one special character."
    : true;
};
export default {
  isEmail,
  textRequired,
  passwordValidation,
};

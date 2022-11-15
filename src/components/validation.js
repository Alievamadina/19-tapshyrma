const validation = (values) => {
  let errors = {};
  if (!values.fullname) {
    errors.fullname = "write your name:";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email is not valid";
  }
  if (!values.password) {
    errors.password = "write your name";
  } else if (values.password.lenght < 5)
    errors.password = "Password must be longer than five characters";
  return errors;
};
export default validation;

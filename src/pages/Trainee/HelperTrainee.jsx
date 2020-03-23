import * as yup from 'yup';

 const Schema = yup.object().shape({
  name: yup.string().required('name is required field').min(3),
  email: yup.string().email().required('email is required '),
  password: yup.string().required('password is required ')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'must contain 8 character, atleast one uppercase letter,one lowercase letter and one number'),
  confirmPassword: yup.string().required('confirm password is required')
    .oneOf([yup.ref('password'), null], 'password must match'),
});

getError = (key, state) => {
  const { touch } = state;

  if (touch[key] && hasErrors()) {
    try {
      Schema.validateSyncAt(key, state);
    } catch (err) {
      return err.message;
    }
  }
  return false;
};

hasErrors = (state) => {
  try {
    Schema.validateSync(state);
  } catch (err) {
    return true;
  }
  return false;
};

isTouched = (key, state) => {
  const { touch } = state;
  this.setState({ touch: { ...touch, [key]: true } });
};

handleData = (data) => (event) => {
  this.setState({ [data]: event.target.value });
};


export{ getError, hasErrors, isTouched ,handleData };

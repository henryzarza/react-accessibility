const ERROR_MESSAGES = {
  required: 'This field is required',
  maxLength: 'The length should be lower than',
  minLength: 'The length should be greater than',
  email: 'Email format is wrong',
  password: 'Should be at least one uppercase letter, one lowercase letter and one number'
};

export const FIELD_NAMES = {
  EMAIL: 'email',
  PASSWORD: 'password'
};

export const VALIDATION_SCHEMA = {
  [FIELD_NAMES.EMAIL]: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 60,
      message: `${ERROR_MESSAGES.maxLength} 60`
    },
    minLength: {
      value: 5,
      message: `${ERROR_MESSAGES.minLength} 5`
    },
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: ERROR_MESSAGES.email
    }
  },
  [FIELD_NAMES.PASSWORD]: {
    required: ERROR_MESSAGES.required,
    maxLength: {
      value: 60,
      message: `${ERROR_MESSAGES.maxLength} 60`
    },
    minLength: {
      value: 10,
      message: `${ERROR_MESSAGES.minLength} 10`
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
      message: ERROR_MESSAGES.password
    }
  }
};

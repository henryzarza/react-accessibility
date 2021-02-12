import styles from './styles.module.css';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  validationSchema?: {
    required?: string;
    maxLength?: {
      value: number;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: any;
      message: string;
    };
  };
  errors?: {
    message: string;
  };
  register: any;
}

function FormInput({ id, label, type, register, validationSchema, errors, placeholder }: Props) {
  return (
    <div className={styles.container}>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        autoComplete="off"
        ref={register(validationSchema)}
        className={`base-text ${styles.input}`}
      />
      <label className="small-text" htmlFor={id}>
        {label}
      </label>
      {errors && <small className={`small-text fw-semibold ${styles.error}`}>{errors.message}</small>}
    </div>
  );
}

FormInput.defaultProps = {
  type: 'text',
  validationSchema: {}
};

export default FormInput;

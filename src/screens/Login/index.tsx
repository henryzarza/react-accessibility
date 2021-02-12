import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import Spinner from '../../components/Spinner';

import { VALIDATION_SCHEMA, FIELD_NAMES } from './constants';
import styles from './styles.module.css';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push('/');
    }, 5000);
  };

  return (
    <main className={styles.container}>
      <section className={styles['left-container']}>
        <form className={styles.content} onSubmit={handleSubmit(handleLogin)}>
          <h1 className="title m-bottom-3">Batman characters</h1>
          <p className="base-text m-bottom-4">
            A React application example to show accessibility on web applications
          </p>
          <FormInput
            id={FIELD_NAMES.EMAIL}
            label="Email"
            register={register}
            validationSchema={VALIDATION_SCHEMA[FIELD_NAMES.EMAIL]}
            errors={errors.email}
            placeholder="example@email.com"
          />
          <FormInput
            id={FIELD_NAMES.PASSWORD}
            label="Password"
            type="password"
            register={register}
            validationSchema={VALIDATION_SCHEMA[FIELD_NAMES.PASSWORD]}
            errors={errors.password}
            placeholder="••••••••••"
          />
          <button type="submit" className={`button primary base-text fw-bold m-bottom-4 ${styles.button}`}>
            {isLoading && <Spinner isSmall />}
            Log In
          </button>
          <Link to="/" className="small-text fw-bold link">
            Don't have an account?
          </Link>
        </form>
      </section>
      <section className={styles['right-container']} />
    </main>
  );
}

export default Login;

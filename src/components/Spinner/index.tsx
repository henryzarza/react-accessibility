import styles from './styles.module.css';

function Spinner(isSmall: { isSmall?: boolean; }) {
  return (
    <div aria-label="Loading" className={`m-right-2 ${styles.spinner} ${isSmall ? styles.small : ''}`} />
  )
}

export default Spinner;

import styles from './styles.module.css';

function Spinner(isSmall: { isSmall?: boolean; }) {
  return (
    <div className={`m-right-2 ${styles.spinner} ${isSmall ? styles.small : ''}`} />
  )
}

export default Spinner;

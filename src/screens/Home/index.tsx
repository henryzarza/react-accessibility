import styles from './styles.module.css';

function Home() {
  return (
    <div className={styles.app}>
      <h1 className="title">Home</h1>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default Home;

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import styles from './styles.module.css';
import { CHARACTERS } from './constants';

function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {CHARACTERS.map(character => <Card key={character.id} data={character} />)}
      </main>
      <Footer />
    </>
  );
}

export default Home;

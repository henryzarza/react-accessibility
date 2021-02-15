import styles from './styles.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className="title white-color m-bottom-4">
        Batman Characters
      </h1>
      <p className={`base-text white-color ${styles.description}`}>
        Batman is a fictional superhero appearing in American comic books published by DC Comics.
        The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective
        Comics #27 in 1939. Originally named the "Bat-Man," the character is also referred to by such epithets
        as the Caped Crusader, the Dark Knight, and the World's Greatest Detective.
      </p>
    </nav>
  )
}

export default Navbar;

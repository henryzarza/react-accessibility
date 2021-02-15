import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <blockquote className={`base-text white-color m-bottom-4 ${styles.quote}`} cite="https://www.w3.org/standards/webdesign/accessibility">
        "The Web is fundamentally designed to work for all people, whatever their hardware, software, language, culture, location, or
        physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement,
        sight, and cognitive ability"
        <br/>
        W3C - Accessibility
      </blockquote>
      <span className={`small-text white-color ${styles.author}`}>Made with <i aria-label="love">❤️</i> by Henry Zarza</span>
    </footer>
  )
}

export default Footer;

import styles from './styles.module.css';

interface Props {
  data: {
    id: string;
    image: string;
    title: string;
    subtitle: string;
    description: string;
  }
}

function Card({ data }: Props) {
  return (
    <div className={styles.card}>
      <div className={`m-bottom-2 ${styles['img-wrapper']}`}>
        <img src={data.image} className={styles.img} alt={data.title} />
        <h3 className={`small-title white-color ${styles.title}`}>{data.title}</h3>
      </div>
      <h4 className="base-text fw-semibold blue-color m-bottom-1">{data.subtitle}</h4>
      <p className={`base-text m-bottom-5 ${styles.description}`}>{data.description}</p>
      <button type="button" className={`button secondary base-text fw-bold ${styles.button}`}>See more</button>
    </div>
  )
}

export default Card;

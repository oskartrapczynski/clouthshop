import styles from './Hero.module.css';
import { CenterContent, FullWidthButton } from '..';

const Hero = ({ heroImage }) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenterContent>
        <div className={styles.contentWrapper}>
          <h2>Letnie promocje do -70%</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton onClick={() => {}}>Sprawdź produkty</FullWidthButton>
        </div>
      </CenterContent>
    </div>
  );
};

export default Hero;

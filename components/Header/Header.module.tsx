import styles from './Header.module.scss';
import Image from 'next/image';
import logo from '../../public/logo-name.png'
import DateScreen from '../Date/Date.module';
export default function HeaderScreen() {
  return (
    <header className={styles.header__container}>
      <section className={styles.header__content}>
        <div className={styles.header__logo}>
          <Image 
            src={logo}
            alt='Logo'
            width={150}
            height={36}
          />       
        </div>
        <div className={styles.header__welcome}>
          <h2>Seja bem-vindo de volta, Matheus!</h2>
        </div>
        <div className={styles.header__date}>
            <DateScreen />
        </div>
      </section>
    </header>
  );
}

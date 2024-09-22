import { ToDoScreen } from '@/components/ToDo/ToDo.module';
import styles from './styles.module.scss';

export default function Home() {
  return (
   
       <section className={styles.main__container}>     
         <ToDoScreen />
      </section>
   
  );
}

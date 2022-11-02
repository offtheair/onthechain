import { Button } from 'ui'
import styles from './page.module.css'

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to onthechain.tv!</h1>
      <Button />
    </main>
  </div>
)

// eslint-disable-next-line import/no-default-export
export default Home

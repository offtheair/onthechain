import { Button } from 'ui'
import styles from './page.module.css'

export function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to onthechain.tv!</h1>
        <Button />
      </main>
    </div>
  )
}

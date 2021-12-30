import styles from './app-layout.module.css'

const AppLayout = ({ children }) => {
  return (
    <div className={styles.app}>
      <main className={styles.main} >
        { children }
      </main>
    </div>
  )
}

export default AppLayout

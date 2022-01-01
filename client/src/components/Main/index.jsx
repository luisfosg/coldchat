import Users from '@/components/Users'
import Profile from '@/components/Profile'
import Menu from '@/components/Menu'

import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.column1}>
      <div className={styles.containerProfile}>
        <Profile />
      </div>
      <div className={styles.containerBotton}>
        <section className={styles.containerUsers}>
          <Users />
        </section>
        <div className={styles.menuBotton} >
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Main

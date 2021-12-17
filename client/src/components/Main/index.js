import Users from 'components/Users'
import Profile from 'components/Profile'

import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.column1}>
      <div className={styles.containerProfile}>
        <Profile />
      </div>
      <section className={styles.containerUsers}>
        <Users />
      </section>
    </div>
  )
}

export default Main

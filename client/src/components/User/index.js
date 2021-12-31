import Avatar from '@/components/Avatar'

import styles from './User.module.css'

const User = ({ user }) => {
  return (
    <article className={styles.containerUser}>
      <div className={styles.containerAvatar}>
        <Avatar user={user} />
      </div>
      <span>{ user }</span>
    </article>
  )
}

export default User

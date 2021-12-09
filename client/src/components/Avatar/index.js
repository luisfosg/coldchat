import multiavatar from '@multiavatar/multiavatar'

import styles from './avatar.module.css'

const Avatar = ({ user }) => {
  const Avatar = multiavatar(user || 'default')
  return <div className={styles.avatarContainer} dangerouslySetInnerHTML={{ __html: Avatar }} ></div>
}

export default Avatar

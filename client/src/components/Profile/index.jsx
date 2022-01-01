/* import { useContext } from 'react'

import SocketContext from '@/context/SocketContext'

import Avatar from '@/components/Avatar' */

import styles from './Profile.module.css'

const Profile = () => {
  /* const { nickname } = useContext(SocketContext) */

  return (
    <div className={styles.containerProfile}>
      <div className={styles.containerAvatar}>
        {/* <Avatar user={ nickname } /> */}
      </div>
      {/* <span>{ nickname }</span> */}
    </div>
  )
}

export default Profile

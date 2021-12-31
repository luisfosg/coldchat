import User from '@/components/User'

import useUsers from '@/hooks/useUsers'

import styles from './Users.module.css'

const Users = () => {
  const { users } = useUsers()

  if (users.length === 0) return <div className={styles.noUsers}>No hay ningún Usuario Conectado</div>

  return (
    <div className={styles.containerUsers}>
      {
        users.map((user) => (
          <User key={user} user={user} />
        ))
      }
    </div>
  )
}

export default Users

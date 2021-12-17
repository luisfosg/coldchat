import clsx from 'clsx'

import styles from './FormMessage.module.css'

const button = clsx('nes-btn is-primary', styles.button)
const divField = clsx('nes-field', styles.inLine)

const FormMessage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={ divField }>
        <input type="text" className="nes-input is-primary" placeholder="Mensaje"/>
        <button type="submit" className={ button }><i className="fas fa-caret-right"></i></button>
      </div>
    </form>
  )
}

export default FormMessage

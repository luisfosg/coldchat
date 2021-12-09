import useTheme from 'hooks/useTheme'

import { themeLight } from 'styles/themes'

export default function Home () {
  useTheme(themeLight)

  return (
    <div>
      <h1>
        Bienvenido a ColdChat!
      </h1>
      <br />
      <div className="nes-field is-dark">
        <label htmlFor="name_field">Coloca tu Nick</label>
        <input type="text" id="name_field" className="nes-input" placeholder="Mi Nick"/>
      </div>
      <br />
      <button type="button" className="nes-btn is-primary">Entrar</button>
    </div>
  )
}

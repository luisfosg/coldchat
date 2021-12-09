import useTheme from 'hooks/useTheme'

import FormUser from 'components/FormUser'

import { themeLight } from 'styles/themes'

export default function Home () {
  useTheme(themeLight)

  return (
    <>
      <h1>Bienvenido a ColdChat!</h1>
      <FormUser />
    </>
  )
}

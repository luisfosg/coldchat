import { useEffect, useState } from 'react'

import { themeLight } from '@/styles/themes'

const useTheme = () => {
  const [theme, setCurrentTheme] = useState(themeLight)

  useEffect(
    () => {
      for (const key in theme.colors) {
        document.documentElement.style.setProperty(`--${key}`, theme.colors[key])
      }
    },
    [theme]
  )

  const setTheme = (theme) => {
    setCurrentTheme(theme)
  }

  return {
    theme,
    setTheme
  }
}

export default useTheme

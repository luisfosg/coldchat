import { useEffect, useState } from 'react'

import { themeLight, themeDark } from '@/styles/themes'

const useTheme = () => {
  const [theme, setCurrentTheme] = useState(() => {
    const themeFromStorage = localStorage.getItem('theme')
    return themeFromStorage === 'dark' ? themeDark : themeLight
  })

  useEffect(
    () => {
      for (const key in theme.colors) {
        document.documentElement.style.setProperty(`--${key}`, theme.colors[key])
      }
    },
    [theme]
  )

  const setTheme = (theme) => {
    localStorage.setItem('theme', theme.name)
    setCurrentTheme(theme)
  }

  return {
    theme,
    setTheme
  }
}

export default useTheme

import { useContext } from 'react'

import ThemeContext from '@/context/ThemeContext'

const useTheme = () => {
  const { theme, setCurrentTheme } = useContext(ThemeContext)

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

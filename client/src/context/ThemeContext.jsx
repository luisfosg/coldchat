import { useState, createContext, useEffect } from 'react'

import { themeLight, themeDark } from '@/styles/themes'

const Context = createContext({
  theme: themeLight,
  setCurrentTheme: () => {}
})

export const ThemeContextProvider = ({ children }) => {
  const [theme, setCurrentTheme] = useState(() => {
    const themeFromStorage = localStorage.getItem('theme')
    return themeFromStorage === 'dark' ? themeDark : themeLight
  })

  useEffect(() => {
    for (const key in theme.colors) {
      document.documentElement.style.setProperty(`--${key}`, theme.colors[key])
    }
  }, [theme])

  return (
    <Context.Provider value={{ theme, setCurrentTheme }}>
      {children}
    </Context.Provider>
  )
}

export default Context

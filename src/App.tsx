import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'
import Routes from './routes'

import ThemeSwitcher from './components/ThemeSwitcher'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'

function App(): any {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

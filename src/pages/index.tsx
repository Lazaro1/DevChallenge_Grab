import Login from './Login'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  const theme = {
    blue: '#4E5BEE',
    red: '#FF5757',
    gray: '#F8F8F8',
    darkGray: '#504f60'
  }

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  )
}

import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login'
import { theme } from './styles/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  )
}

export default App

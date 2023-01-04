import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.900'
      }
    }
  }
})

import { useRouteError, Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

export default function ErrorScreen() {
  const error = useRouteError()
  console.error(error)

  return (
    <Flex color="white">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          Volte para tela inicial clicando aqui:{' '}
          <Link to={`/main`}>Página principal</Link>
        </p>
      </div>
    </Flex>
  )
}

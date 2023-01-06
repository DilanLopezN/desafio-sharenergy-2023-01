import { Flex } from '@chakra-ui/react'
import Header from '../components/Header'
export default function MainScreen() {
  async function getUser() {
    const response = await fetch('https://randomuser.me/api')
    const data = response.json()
  }
  getUser()

  return (
    <Flex>
      <Header />
      <div></div>
    </Flex>
  )
}

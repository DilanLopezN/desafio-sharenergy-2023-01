import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

export default function Login() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="cyan.300"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="username">Seu nome de usuário:</FormLabel>
            <Input
              size="lg"
              name="username"
              id="username"
              type="text"
              focusBorderColor="cyan.700"
              bgColor="cyan.400"
              variant="filled"
              _hover={{
                bgColor: 'cyan.500'
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Sua senha: </FormLabel>
            <Input
              size="lg"
              name="password"
              id="password"
              type="password"
              focusBorderColor="cyan.700"
              bgColor="cyan.400"
              variant="filled"
              _hover={{
                bgColor: 'cyan.500'
              }}
            />
          </FormControl>
        </Stack>

        <Button
          type="submit"
          mt="6"
          backgroundColor="cyan.400"
          variant="filled"
          _hover={{
            bgColor: 'cyan.500'
          }}
          size="lg"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  )
}

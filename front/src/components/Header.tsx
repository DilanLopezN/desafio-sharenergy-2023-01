import { Flex, Text, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      color="white"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Shar
        <Text as="span" color="cyan.400">
          Energy
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="cyan.600"
        borderRadius="full"
      >
        <Input
          placeholder="Pesquisar"
          _placeholder={{ color: 'gray.700' }}
          variant="unstyled"
          color="black"
          px="4"
          mr="4"
          fontWeight="bold"
        />
        <Icon as={RiSearchLine} fontSize="20" color="black" />
      </Flex>
    </Flex>
  )
}

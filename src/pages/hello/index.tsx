import type { NextPage } from 'next'
import {
  VStack, Text, Heading,
} from '@chakra-ui/react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <Text fontSize='xl'>Hello, World</Text>
      <Link href="/">
        <a>Topページへ</a>
      </Link>
    </VStack>
  )
}

export default Home

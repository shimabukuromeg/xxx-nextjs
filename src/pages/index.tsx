import type { NextPage } from 'next'
import {
  VStack, Text, Heading,
} from '@chakra-ui/react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <VStack p={4}>
      <Heading>Topページ</Heading>
      <Text fontSize='xl'>Topページ</Text>
      <Link href="/hello">
        <a>helloページへ</a>
      </Link>
    </VStack>
  )
}

export default Home

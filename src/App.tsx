import { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ChakraProvider, Stack } from '@chakra-ui/react'

import { Box, Select } from '@chakra-ui/react'
import ComposableSelect from './components/Character/ComposableCharacterSelect'
import CharacterSelect from './components/Character/ComposableCharacterSelect'
import { CharacterOption } from './components/Character'
import useCharacterList from './hooks/useCharacterList'
import CharacterComponentsPage from './pages/CharacterComponentsPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <CharacterComponentsPage />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App

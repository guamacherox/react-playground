import { Box, Stack, Heading, Divider } from '@chakra-ui/react'
import React from 'react'
import { CharacterOption, CharacterSelect } from '../components/Character'
import ConfigurableSelect from '../components/Character/ConfigurableSelect'
import useCharacterList from '../hooks/useCharacterList'

interface Props {}

const CharacterComponentsPage: React.FC<Props> = (props) => {
  const { data, isLoading, error } = useCharacterList()

  console.log('🚀 ~ file: CharacterComponentsPage.tsx ~ line 10 ~ data', data)

  return (
    <>
      {/* START CONFIGURABLE SELECTS */}
      <Box bg="white" w="100%" p={4}>
        <Stack spacing="4">
          <Heading as={'h1'} size="lg">
            Configurable Selects
          </Heading>
          <Divider />
          {/* Depends of async data fetching */}
          data &&
          <ConfigurableSelect dataForCharacters={data} isLoading={isLoading} />
          {/* Implicit Mocking */}
          <ConfigurableSelect
            dataForCharacters={[
              { name: 'Juan Luis', status: 'Dead' },
              { name: 'Sebastian', status: 'Very Alive' },
              { name: 'Gabriel', status: 'Eternal Party' },
              { name: 'German', status: 'Installing VScode Plugins' },
            ]}
            isLoading={isLoading}
          />
        </Stack>
      </Box>
      {/* END CONFIGURABLE SELECTS */}
      {/* START COMPOSABLE SELECTS */}
      <Box bg="white" w="100%" p={4}>
        <Stack spacing="4">
          <Heading as={'h1'} size="lg">
            Composable Selects
          </Heading>
          <Divider />
          {/* Depends of async data fetching */}
          <CharacterSelect isLoading={isLoading}>
            {data &&
              data.map((character: any, index: number) => {
                return (
                  <CharacterOption key={index}>
                    {`${character.name}`}
                  </CharacterOption>
                )
              })}
          </CharacterSelect>

          {/* Explicit Mocking */}
          <CharacterSelect>
            <CharacterOption>Juan Luis</CharacterOption>
            <CharacterOption>Juan Bautista</CharacterOption>
            <CharacterOption>Braulio</CharacterOption>
          </CharacterSelect>
        </Stack>
      </Box>
      {/* END COMPOSABLE SELECTS */}
    </>
  )
}

export default CharacterComponentsPage

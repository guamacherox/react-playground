import React from 'react'
import { Select, Skeleton } from '@chakra-ui/react'
import CharacterOptionForConfigurable from './ConfigurableCharacterOption'

interface Props {
  dataForCharacters: any
  isLoading: boolean
}

const ConfigurableCharacterSelect = ({
  dataForCharacters = [],
  isLoading,
}: Props) => {
  return (
    <>
      {
        <Skeleton isLoaded={!isLoading}>
          <Select placeholder="Select character">
            {dataForCharacters.length > 0 &&
              dataForCharacters.map((character: any) => {
                return (
                  <CharacterOptionForConfigurable dataForOption={character} />
                )
              })}
          </Select>
        </Skeleton>
      }
    </>
  )
}

export default ConfigurableCharacterSelect

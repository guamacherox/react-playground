import React from 'react'
import { Select, Skeleton } from '@chakra-ui/react'
import useCharacterList from '../../hooks/useCharacterList'

interface Props {
  isLoading?: any
}

const ComposableCharacterSelect: React.FC<Props> = ({
  isLoading = false,
  ...props
}) => {
  return (
    <Skeleton isLoaded={!isLoading}>
      <Select placeholder="Select character">{props.children}</Select>
    </Skeleton>
  )
}

export default ComposableCharacterSelect

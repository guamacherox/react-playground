import { useQuery } from 'react-query'
import { getCharacterList } from '../services/characterCrud'

interface ListPayload {
  page?: number
}

const useCharacterList = (payload: ListPayload = {}) => {
  const getCharacters = useQuery(
    ['characterList', payload],
    () => getCharacterList(payload),
    {
      select: (data) => data.results,
    }
  )

  return { ...getCharacters }
}

export default useCharacterList

const API_BASE = 'https://rickandmortyapi.com/api'

export const getCharacterList = async ({ page = 1 }: any) => {
  const urlSearchParams = new URLSearchParams({ page }).toString()
  console.log(
    '🚀 ~ file: characterCrud.ts ~ line 5 ~ getCharacterList ~ urlSearchParams',
    urlSearchParams
  )
  const response = await fetch(`${API_BASE}/character?${urlSearchParams}`)
  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.error)
  }
  return response.json()
}

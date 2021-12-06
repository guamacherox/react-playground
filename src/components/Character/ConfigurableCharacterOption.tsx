import React from 'react'

interface Props {
  dataForOption: any
}

const ConfigurableCharacterOption: React.FC<Props> = ({
  dataForOption,
}: Props) => {
  return <option value="option1">{dataForOption.name}</option>
}

export default ConfigurableCharacterOption

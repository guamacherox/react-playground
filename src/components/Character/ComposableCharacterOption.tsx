import React from 'react'

interface Props {}

const ComposableCharacterOption: React.FC<Props> = ({ children }) => {
  return <option value="option1">{children}</option>
}

export default ComposableCharacterOption

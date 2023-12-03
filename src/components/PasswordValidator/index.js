import {useState} from 'react'

import {
  AppContainer,
  BgContainer,
  AppTitle,
  AppDescription,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <BgContainer>
        <AppTitle>Password Validator</AppTitle>
        <AppDescription>
          Check how strong and secure is your password
        </AppDescription>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length >= 8 ? (
          ''
        ) : (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </BgContainer>
    </AppContainer>
  )
}

export default PasswordValidator

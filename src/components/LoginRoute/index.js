import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  LoginRouteContainer,
  LoginButton,
  Input,
  Label,
  ErrorMsg,
  InputFieldContainer,
  Form,
  LoginLogoImage,
  CheckBoxInputContainer,
  CheckBoxInput,
  ShowPassword,
} from './styledComponents'

import CustomContext from '../../context/CustomContext'

class Login extends Component {
  state = {
    enteredUsername: '',
    enteredPassword: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  renderHomePage = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  makeApiRequest = async (loginUrl, options) => {
    const response = await fetch(loginUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.renderHomePage(data.jwt_token)
    } else {
      this.setState({showSubmitError: true, errorMsg: data.error_msg})
    }
  }

  onFormSubmit = event => {
    event.preventDefault()

    const {enteredUsername, enteredPassword} = this.state
    const userDetails = {username: enteredUsername, password: enteredPassword}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    this.makeApiRequest(loginUrl, options)
  }

  onChangeUsername = event => {
    this.setState({enteredUsername: event.target.value})
  }

  onChangePassword = event => {
    this.setState({enteredPassword: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      enteredUsername,
      enteredPassword,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode} = value

          const themBackgroundColor = isInDarkMode ? '#231f20' : '#f8fafc'

          const loginLogoUrl = isInDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const shadowColor = isInDarkMode ? '#0f0f0f' : '#bfbfbf'
          const formBgColor = isInDarkMode ? '#0f0f0f' : '#f9f9f9'

          const textColor = isInDarkMode ? '#f1f5f9' : '#1e293b'
          const inputBgColor = isInDarkMode ? 'transparent' : '#ffffff'

          return (
            <LoginRouteContainer themBackgroundColor={themBackgroundColor}>
              <Form
                className="form"
                onSubmit={this.onFormSubmit}
                shadowColor={shadowColor}
                formBgColor={formBgColor}
              >
                <LoginLogoImage src={loginLogoUrl} alt="website logo" />

                <InputFieldContainer>
                  <Label htmlFor="username" textColor={textColor}>
                    USERNAME
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    onChange={this.onChangeUsername}
                    value={enteredUsername}
                    textColor={textColor}
                    inputBgColor={inputBgColor}
                    placeholder="Username"
                  />
                </InputFieldContainer>
                <InputFieldContainer>
                  <Label htmlFor="password" textColor={textColor}>
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={this.onChangePassword}
                    value={enteredPassword}
                    textColor={textColor}
                    inputBgColor={inputBgColor}
                    placeholder="Password"
                  />
                </InputFieldContainer>
                <CheckBoxInputContainer>
                  <CheckBoxInput
                    type="checkbox"
                    onChange={this.onToggleShowPassword}
                    checked={showPassword}
                  />
                  <ShowPassword textColor={textColor}>
                    Show Password
                  </ShowPassword>
                </CheckBoxInputContainer>

                <LoginButton className="login-button" type="submit">
                  Login
                </LoginButton>
                {showSubmitError ? (
                  <ErrorMsg className="error-message">*{errorMsg}</ErrorMsg>
                ) : (
                  ''
                )}
              </Form>
            </LoginRouteContainer>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}
export default Login

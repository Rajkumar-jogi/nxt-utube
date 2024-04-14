import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.themBackgroundColor};
`
export const Form = styled.form`
  width: 90%;
  max-width: 400px;
  box-shadow: 4px 4px 16px 0px ${props => props.shadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${props => props.formBgColor};
`
export const LoginLogoImage = styled.img`
  width: 90%;
  max-width: 200px;
  height: 60px;
  margin-bottom: 16px;
`

export const InputFieldContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.textColor};
  margin-bottom: 8px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.textColor};
  width: 100%;
  border: 1px solid #94a3b8;
  outline: none;
  padding: 8px;
  background-color: ${props => props.inputBgColor};
`
export const LoginButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px 10px 20px;
  width: 90%;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #ff0000;
`
export const CheckBoxInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 16px;
  padding: 8px;
`
export const CheckBoxInput = styled.input`
  font-size: 18px;
  margin-right: 12px;
  margin-top: 4px;
`
export const ShowPassword = styled.label`
  font-size: 18px;
  color: ${props => props.textColor};
`

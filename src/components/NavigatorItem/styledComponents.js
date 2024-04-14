import styled from 'styled-components'

export const NavMenuItem = styled.li`
  width: 100%;
  transition: background-color 0.8s ease;
  margin-bottom: 12px;
  &:hover {
    background-color: #f2f2f2;
  }
`

export const CustomSpan = styled.span`
  font-size: 20px;
  font-family: 'Roboto';
  margin-left: 12px;
`

export const CustomButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 24px;
  color: ${({isInDarkMode}) => (isInDarkMode ? '#fff' : '#1e293b')};
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    font-weight: 600;
  }
`

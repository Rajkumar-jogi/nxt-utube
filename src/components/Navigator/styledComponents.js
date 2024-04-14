import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 240px;
  margin-right: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${({isInDarkMode}) =>
    isInDarkMode ? '#212121' : '#ffffff'};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  list-style: none;
`

export const NavFooterContainer = styled.div`
  width: 100%;
`
export const ContactUsHeading = styled.h1`
  font-size: 24px;
  color: ${({isInDarkMode}) => (isInDarkMode ? '#f9f9f9 ' : '#0f0f0f')};
`
export const SocialLogoList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
`
export const SocialLogoItem = styled.li`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`
export const SocialLogo = styled.img`
  width: 100%;
`

export const FooterDescription = styled.p`
  font-size: 20px;
  color: ${({isInDarkMode}) => (isInDarkMode ? '#f9f9f9 ' : '#0f0f0f')};
`

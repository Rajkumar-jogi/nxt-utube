import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.themeBackgroundColor};
  height: 60px;
  @media screen and (min-width: 768px) {
    height: 80px;
  }
`
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 98%;
    max-width: 1400px;
  }
`

export const LogoImage = styled.img`
  width: 90px;
  height: 30px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 120px;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  padding-left: 0;
  flex: 1;
  margin-left: 12px;
  margin-right: 12px;
`
export const NavMenuItem = styled.li`
  margin: 16px;
  font-size: 24px;
  font-weight: 500;
`

export const NavProfileItem = styled.li`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const MenuButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.themeIconColor};
  width: 40px;
  height: 40px;
  font-size: 30px;
  margin-top: 5px;
`

export const NavHamburgerItem = styled.li`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`

export const ChangeThemeIcon = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
  margin-top: 8px;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: #f8fafc;
`
export const ProfileImage = styled.img`
  width: 100%;
  height: 30px;
  cursor: pointer;
`

export const MobileLogoutButton = styled.button`
  background-color: transparent;
  font-size: 24px;
  margin-right: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  color: ${props => props.themeIconColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopLogoutButton = styled.button`
  background-color: transparent;
  color: #3b82f6;
  padding: 10px 20px 10px 20px;
  border: 2px solid #3b82f6;
  margin-right: 12px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const MenuItemsContainer = styled.div`
  /* Popup menu container styles */
  position: fixed;
  top: 0;
  left: ${props => (props.showMenu ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: left 2s ease-in-out;
  border: 2px solid red;
`

export const MenuItems = styled.ul`
  /* Popup menu items styles */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0;
  list-style: none;
  background-color: transparent;
  border-radius: 8px;
  width: 100%;
  max-width: 550px;
  padding: 20px;
`

export const MenuItem = styled.li`
  /* Popup menu item styles */
  margin-bottom: 10px;
`

export const CrossButton = styled.button`
  /* Close button styles */
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`
export const CustomSpan = styled.span`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  margin-left: 12px;
`

export const CustomButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({isActive}) => (isActive ? '#ff0000' : '#383838')};
  &:hover {
    font-weight: 600;
  }
`

export const LogoutPopupContainer = styled.div`
  width: 98%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
  text-align: center;
`
export const WarningText = styled.p`
  font-size: 20px;
  color: #000000;
  font-family: 'Roboto';
  margin-bottom: 12px;
`
export const LogoutControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ConformButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  padding: 12px 20px 12px 20px;
  outline: none;
  cursor: pointer;
  margin: 12px;
`

export const CancelButton = styled(ConformButton)`
  border: 2px solid #f1f1f1;
  color: #7e858e;
  background-color: transparent;
`

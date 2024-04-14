import {Component} from 'react'

import Cookies from 'js-cookie'

import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {IoSunny} from 'react-icons/io5'

import {IoIosMoon} from 'react-icons/io'

import {FiLogOut} from 'react-icons/fi'

import {GiHamburgerMenu} from 'react-icons/gi'

import {MdHome} from 'react-icons/md'

import {RiMenuAddLine} from 'react-icons/ri'

import {FaGamepad, FaGripfire} from 'react-icons/fa'

import CustomContext from '../../context/CustomContext'

import {
  NavHeader,
  NavContainer,
  LogoImage,
  NavMenu,
  NavMenuItem,
  MobileLogoutButton,
  DesktopLogoutButton,
  ProfileImage,
  ChangeThemeIcon,
  NavProfileItem,
  NavHamburgerItem,
  MenuButton,
  MenuItemsContainer,
  MenuItems,
  MenuItem,
  CrossButton,
  CustomButton,
  CustomSpan,
  LogoutPopupContainer,
  WarningText,
  LogoutControlsContainer,
  ConformButton,
  CancelButton,
} from './styledComponents'

class Header extends Component {
  state = {
    showMenu: false,
    showLogoutPopup: false,
  }

  onClickLogout = () => {
    this.setState(prevState => ({
      showLogoutPopup: !prevState.showLogoutPopup,
    }))
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  onClickHome = () => {
    const {history} = this.props
    history.push('/')
  }

  onClickTrending = () => {
    const {history} = this.props
    history.push('/videos/trending')
  }

  onClickGaming = () => {
    const {history} = this.props
    history.push('/videos/gaming')
  }

  onClickSaveVidoes = () => {
    const {history} = this.props
    history.push('/videos/savedVideos')
  }

  onClickCancel = () => {
    this.setState({showLogoutPopup: false})
  }

  onClickConform = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
    this.setState({showLogoutPopup: false})
  }

  render() {
    const {showMenu, showLogoutPopup} = this.state
    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode, changeToDarkMode} = value

          const onToggleTheme = () => {
            changeToDarkMode()
          }
          const themeBackgroundColor = isInDarkMode ? '#212121' : '#ffffff'
          const themeChangeIcon = isInDarkMode ? (
            <IoSunny
              height={40}
              width={40}
              aria-label="icon-in-dark"
              color="#ffffff"
            />
          ) : (
            <IoIosMoon height={30} width={30} aria-label="icon-in-light" />
          )
          const themeLogoUrl = isInDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const themeIconColor = isInDarkMode ? '#ffffff' : '#0f0f0f'

          return (
            <NavHeader themeBackgroundColor={themeBackgroundColor}>
              <NavContainer>
                <Link to="/">
                  <LogoImage src={themeLogoUrl} alt="website logo" />
                </Link>

                <NavMenu>
                  <NavMenuItem>
                    <ChangeThemeIcon type="button" onClick={onToggleTheme}>
                      {themeChangeIcon}
                    </ChangeThemeIcon>
                  </NavMenuItem>
                  <NavProfileItem>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavProfileItem>
                  <NavHamburgerItem>
                    <MenuButton
                      type="button"
                      themeIconColor={themeIconColor}
                      onClick={this.toggleMenu}
                    >
                      <GiHamburgerMenu />
                    </MenuButton>
                  </NavHamburgerItem>
                </NavMenu>

                <MobileLogoutButton
                  onClick={this.onClickLogout}
                  themeIconColor={themeIconColor}
                >
                  <FiLogOut aria-label="mobile-logout" />
                </MobileLogoutButton>
                <DesktopLogoutButton type="button" onClick={this.onClickLogout}>
                  Logout
                </DesktopLogoutButton>

                <Popup open={showLogoutPopup} modal>
                  <LogoutPopupContainer>
                    <WarningText>Are you sure you want to logout?</WarningText>
                    <LogoutControlsContainer>
                      <CancelButton type="button" onClick={this.onClickCancel}>
                        Cancel
                      </CancelButton>
                      <ConformButton
                        type="button"
                        onClick={this.onClickConform}
                      >
                        Confirm
                      </ConformButton>
                    </LogoutControlsContainer>
                  </LogoutPopupContainer>
                </Popup>

                <Popup open={showMenu} modal>
                  <MenuItemsContainer showMenu={showMenu}>
                    <CrossButton onClick={this.toggleMenu}>X</CrossButton>
                    <MenuItems>
                      <MenuItem>
                        <CustomButton type="button" onClick={this.onClickHome}>
                          <MdHome />
                          <CustomSpan>Home</CustomSpan>
                        </CustomButton>
                      </MenuItem>
                      <MenuItem>
                        <CustomButton
                          type="button"
                          onClick={this.onClickTrending}
                        >
                          <FaGripfire />
                          <CustomSpan>Trending</CustomSpan>
                        </CustomButton>
                      </MenuItem>
                      <MenuItem>
                        <CustomButton
                          type="button"
                          onClick={this.onClickGaming}
                        >
                          <FaGamepad />
                          <CustomSpan>Gaming</CustomSpan>
                        </CustomButton>
                      </MenuItem>
                      <MenuItem>
                        <CustomButton
                          type="button"
                          onClick={this.onClickSaveVidoes}
                        >
                          <RiMenuAddLine />
                          <CustomSpan>Saved Videos</CustomSpan>
                        </CustomButton>
                      </MenuItem>
                    </MenuItems>
                  </MenuItemsContainer>
                </Popup>
              </NavContainer>
            </NavHeader>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}

export default withRouter(Header)

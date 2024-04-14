import {Component} from 'react'

import NavigatorItem from '../NavigatorItem'

import CustomContext from '../../context/CustomContext'

import {
  NavContainer,
  NavMenu,
  NavFooterContainer,
  ContactUsHeading,
  SocialLogoList,
  SocialLogoItem,
  SocialLogo,
  FooterDescription,
} from './styledComponents'

const NavMenuList = [
  {
    id: 'home',
    displayText: 'Home',
    icon: 'MdHome',
  },
  {
    id: 'trending',
    displayText: 'Trending',
    icon: 'FaGripfire',
  },
  {
    id: 'gaming',
    displayText: 'Gaming',
    icon: 'FaGamepad',
  },
  {
    id: 'saved',
    displayText: 'Saved',
    icon: 'RiMenuAddLine',
  },
]

class Navigator extends Component {
  renderFooter = isInDarkMode => (
    <NavFooterContainer>
      <ContactUsHeading isInDarkMode={isInDarkMode}>
        Contact Us
      </ContactUsHeading>
      <SocialLogoList>
        <SocialLogoItem>
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
        </SocialLogoItem>
        <SocialLogoItem>
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
        </SocialLogoItem>
        <SocialLogoItem>
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialLogoItem>
      </SocialLogoList>
      <FooterDescription isInDarkMode={isInDarkMode}>
        Enjoy! Now to see your channels and recommendations!
      </FooterDescription>
    </NavFooterContainer>
  )

  render() {
    return (
      <CustomContext.Consumer>
        {value => {
          const {activeNavItem, isInDarkMode} = value
          return (
            <NavContainer isInDarkMode={isInDarkMode}>
              <NavMenu>
                {NavMenuList.map(navItem => (
                  <NavigatorItem
                    key={navItem.id}
                    navItem={navItem}
                    isActive={navItem.id === activeNavItem}
                  />
                ))}
              </NavMenu>
              {this.renderFooter(isInDarkMode)}
            </NavContainer>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}

export default Navigator

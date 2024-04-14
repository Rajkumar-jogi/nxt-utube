import {MdHome} from 'react-icons/md'

import {RiMenuAddLine} from 'react-icons/ri'

import {FaGamepad, FaGripfire} from 'react-icons/fa'

import {withRouter} from 'react-router-dom'

import {NavMenuItem, CustomButton, CustomSpan} from './styledComponents'

import CustomContext from '../../context/CustomContext'

const NavigatorItem = props => {
  const {navItem, isActive, history} = props

  const {id, displayText, icon} = navItem
  return (
    <CustomContext.Consumer>
      {value => {
        const {changeActiveNavItem, isInDarkMode} = value
        const colorOfIcon = isActive ? '#ff0000' : '#383838'
        const onClickNavItem = () => {
          changeActiveNavItem(id)
          console.log(id, 'navitem')

          // Navigate to the appropriate page using history.push
          switch (id) {
            case 'home':
              history.push('/')
              break
            case 'trending':
              history.push('/videos/trending')
              break
            case 'gaming':
              history.push('/videos/gaming')
              break
            case 'saved':
              history.push('/videos/savedVideos')
              break
            default:
              // Handle other cases
              break
          }
        }

        return (
          <NavMenuItem id={id}>
            <CustomButton
              type="button"
              onClick={onClickNavItem}
              isActive={isActive}
              isInDarkMode={isInDarkMode}
            >
              {/* Render the icon based on the icon prop */}
              {icon === 'MdHome' && <MdHome color={colorOfIcon} />}
              {icon === 'FaGripfire' && <FaGripfire color={colorOfIcon} />}
              {icon === 'RiMenuAddLine' && (
                <RiMenuAddLine color={colorOfIcon} />
              )}
              {icon === 'FaGamepad' && <FaGamepad color={colorOfIcon} />}
              <CustomSpan>{displayText}</CustomSpan>
            </CustomButton>
          </NavMenuItem>
        )
      }}
    </CustomContext.Consumer>
  )
}

export default withRouter(NavigatorItem)

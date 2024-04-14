import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const VideoItemContainer = styled.li`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-right: 12px;
    max-width: 260px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  hieght: auto;
  margin-bottom: 12px;
`

export const ProfileAndVideoConentContainer = styled.div`
  display: flex;
  margin-top: 0;
  width: 100%;
`
export const ChannelProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  margin-top: 8px;
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${({isInDarkMode}) => (isInDarkMode ? '#fff' : '#231f20')};
  width: 100%;
`

export const ChannelInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ChannelName = styled.h1`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #94a3b8;
  margin-right: 8px;
`

export const ChannelViewsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  flex: 1;
`

export const ViewsCount = styled.li`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #94a3b8;
`
export const PublishedAt = styled.li`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #94a3b8;
`

import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  /* Add any additional styles you want for the link here */
`

export const VideoItemContainer = styled.li`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin: 12px;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    max-width: 800px;
    flex-direction: row;
  }
`

export const ThumbnailImageContainer = styled.div`
  margin-right: 16px;
  margin-botton: 16px;
  width: 100%;
  flex: 1;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 240px;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #777;
  width: 100%;
`
export const ViewsCount = styled.li`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #94a3b8;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #94a3b8;
`
export const VideoSpecificationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PublishedTill = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #94a3b8;
  margin-left: 12px;
`

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
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    max-width: 220px;
  }
`

export const ThumbnailImageContainer = styled.div`
  margin-right: 16px;
  margin-botton: 16px;
  width: 100%;
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
  color: #231f20;
  width: 100%;
`
export const ViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #94a3b8;
`

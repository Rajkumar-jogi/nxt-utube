import {
  VideoItemContainer,
  ThumbnailImage,
  ProfileAndVideoConentContainer,
  ChannelProfileImage,
  VideoContentContainer,
  VideoTitle,
  ChannelViewsContainer,
  ChannelInfoContainer,
  ViewsCount,
  PublishedAt,
  ChannelName,
  StyledLink,
} from './styledComponents'

import CustomContext from '../../context/CustomContext'

const VideoListItem = props => {
  const {videoItem} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = videoItem
  const {name, profileImageUrl} = channel

  return (
    <CustomContext.Consumer>
      {value => {
        const {isInDarkMode} = value
        return (
          <StyledLink to={`/videos/${id}`}>
            <VideoItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="" />
              <ProfileAndVideoConentContainer>
                <ChannelProfileImage src={profileImageUrl} alt="" />
                <VideoContentContainer>
                  <VideoTitle isInDarkMode={isInDarkMode}>{title}</VideoTitle>
                  <ChannelInfoContainer>
                    <ChannelName>{name}</ChannelName>
                    <ChannelViewsContainer>
                      <ViewsCount>{viewCount}</ViewsCount>
                      <PublishedAt>{publishedAt}</PublishedAt>
                    </ChannelViewsContainer>
                  </ChannelInfoContainer>
                </VideoContentContainer>
              </ProfileAndVideoConentContainer>
            </VideoItemContainer>
          </StyledLink>
        )
      }}
    </CustomContext.Consumer>
  )
}

export default VideoListItem

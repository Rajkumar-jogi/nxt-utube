import {
  VideoItemContainer,
  ThumbnailImageContainer,
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

const TrendingVideoItem = props => {
  const {videoItem} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = videoItem
  const {name, profileImageUrl} = channel
  return (
    <StyledLink to={`/videos/${id}`}>
      <VideoItemContainer>
        <ThumbnailImageContainer>
          <ThumbnailImage src={thumbnailUrl} alt={name} />
        </ThumbnailImageContainer>

        <ProfileAndVideoConentContainer>
          <ChannelProfileImage src={profileImageUrl} alt="" />
          <VideoContentContainer>
            <VideoTitle>{title}</VideoTitle>
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
}

export default TrendingVideoItem

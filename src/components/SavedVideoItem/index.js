import {
  VideoItemContainer,
  ThumbnailImageContainer,
  ThumbnailImage,
  VideoContentContainer,
  VideoTitle,
  ViewsCount,
  StyledLink,
  ChannelName,
  VideoSpecificationContainer,
  PublishedTill,
} from './styledComponents'

const SavedVideoItem = props => {
  const {savedVideo} = props
  const {title, thumbnailUrl, viewCount, id, channel, publishedAt} = savedVideo
  const {name} = channel

  return (
    <StyledLink to={`/videos/${id}`}>
      <VideoItemContainer>
        <ThumbnailImageContainer>
          <ThumbnailImage src={thumbnailUrl} alt={title} />
        </ThumbnailImageContainer>
        <VideoContentContainer>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName>{name} views</ChannelName>
          <VideoSpecificationContainer>
            <ViewsCount>{viewCount} views</ViewsCount>
            <PublishedTill>{publishedAt} </PublishedTill>
          </VideoSpecificationContainer>
        </VideoContentContainer>
      </VideoItemContainer>
    </StyledLink>
  )
}

export default SavedVideoItem

import {
  VideoItemContainer,
  ThumbnailImageContainer,
  ThumbnailImage,
  VideoContentContainer,
  VideoTitle,
  ViewsCount,
  StyledLink,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoItem} = props
  const {title, thumbnailUrl, viewCount, id} = videoItem
  return (
    <StyledLink to={`/videos/${id}`}>
      <VideoItemContainer>
        <ThumbnailImageContainer>
          <ThumbnailImage src={thumbnailUrl} alt={title} />
        </ThumbnailImageContainer>
        <VideoContentContainer>
          <VideoTitle>{title}</VideoTitle>
          <ViewsCount>{viewCount} Watching WorldWide</ViewsCount>
        </VideoContentContainer>
      </VideoItemContainer>
    </StyledLink>
  )
}

export default GamingVideoItem

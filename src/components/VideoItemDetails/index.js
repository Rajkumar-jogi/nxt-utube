import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from 'react-icons/ai'

import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'

import CustomContext from '../../context/CustomContext'

import {
  MainContainer,
  VideoItemContainer,
  VideoPlayerContainer,
  VideoTitle,
  ResContainer,
  VideoViewsAndPublishedAgo,
  Views,
  Published,
  VideoIntarctionContainer,
  Likes,
  Dislikes,
  SaveVideo,
  HorizontalLine,
  ChanneInfoContainer,
  ChannelProfileContainer,
  ChannelImage,
  ChannelContentContainer,
  ChannelName,
  ChannelSubscribers,
  ChannelDescriptionContainer,
  ChannelDescription,
  ResponsiveContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewContentContainer,
  FailureHeding,
  FailureText,
  RetryButton,
} from './styledComponents'

import Navigator from '../Navigator'

import Header from '../Header'

const apiConstants = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failed: 'FAILED',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
    apiStatus: apiConstants.initial,
    videoItem: {},
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormatedData = videoDetails => {
    const formatedData = {
      id: videoDetails.id,
      channel: {
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscribersCount: videoDetails.channel.subscriber_count,
      },
      description: videoDetails.description,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }
    return formatedData
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videoItemDetailsApiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const formatedData = this.getFormatedData(fetchedData.video_details)
      this.setState({
        videoItem: formatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failed})
    }
  }

  render() {
    return (
      <CustomContext.Consumer>
        {value => {
          const {isInDarkMode, addToSaveVideosList} = value
          const onToggleLike = () =>
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisLiked: false,
            }))

          const onToggleDisLike = () =>
            this.setState(prevState => ({
              isDisLiked: !prevState.isDisLiked,
              isLiked: false,
            }))

          const updateVideosList = () => {
            const {videoItem} = this.state
            addToSaveVideosList(videoItem)
          }

          const onToggleSave = () =>
            this.setState(
              prevState => ({isSaved: !prevState.isSaved}),
              updateVideosList(),
            )

          const renderSuccessView = () => {
            const {videoItem, isLiked, isDisLiked, isSaved} = this.state
            const {
              id,
              channel,
              description,
              publishedAt,
              thumbnailUrl,
              title,
              videoUrl,
              viewCount,
            } = videoItem

            const {name, subscribersCount, profileImageUrl} = channel
            console.log(thumbnailUrl, id)
            return (
              <>
                <VideoPlayerContainer>
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                  />
                </VideoPlayerContainer>
                <VideoTitle>{title}</VideoTitle>
                <ResContainer>
                  <VideoViewsAndPublishedAgo>
                    <Views>{viewCount} views</Views>
                    <Published>
                      {formatDistanceToNow(new Date(publishedAt))} ago
                    </Published>
                  </VideoViewsAndPublishedAgo>
                  <VideoIntarctionContainer>
                    <Likes
                      type="button"
                      onClick={onToggleLike}
                      isActive={isLiked}
                    >
                      {isLiked ? <AiFillLike /> : <AiOutlineLike />}
                      Like
                    </Likes>
                    <Dislikes
                      type="button"
                      onClick={onToggleDisLike}
                      isActive={isDisLiked}
                    >
                      {isDisLiked ? <AiFillDislike /> : <AiOutlineDislike />}
                      DisLike
                    </Dislikes>
                    <SaveVideo
                      type="button"
                      onClick={onToggleSave}
                      isActive={isSaved}
                    >
                      {isSaved ? <MdPlaylistAddCheck /> : <MdPlaylistAdd />}
                      Save
                    </SaveVideo>
                  </VideoIntarctionContainer>
                </ResContainer>
                <HorizontalLine />
                <ChanneInfoContainer>
                  <ChannelProfileContainer>
                    <ChannelImage src={profileImageUrl} alt="profileImage" />
                    <ChannelContentContainer>
                      <ChannelName>{name}</ChannelName>
                      <ChannelSubscribers>
                        {subscribersCount} Subscribers
                      </ChannelSubscribers>
                    </ChannelContentContainer>
                  </ChannelProfileContainer>
                  <ChannelDescriptionContainer>
                    <ChannelDescription>{description}</ChannelDescription>
                  </ChannelDescriptionContainer>
                </ChanneInfoContainer>
              </>
            )
          }

          const renderLoadingView = () => (
            <LoaderContainer data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </LoaderContainer>
          )

          const onClickRetryButton = () => {
            this.getVideoItemDetails()
          }

          const renderFailedView = () => (
            <FailureViewContainer>
              <FailureViewImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
              <FailureViewContentContainer>
                <FailureHeding>Opps! Something Went Wrong</FailureHeding>
                <FailureText>
                  We are having some trouble to complete your request. Please
                  try again
                </FailureText>
                <RetryButton type="button" onClick={onClickRetryButton}>
                  Retry
                </RetryButton>
              </FailureViewContentContainer>
            </FailureViewContainer>
          )

          const renderDifferentViews = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case 'SUCCESS':
                return renderSuccessView()
              case 'FAILED':
                return renderFailedView()
              case 'IN_PROGRESS':
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <MainContainer data-testid="trending" isInDarkMode={isInDarkMode}>
              <Header />
              <ResponsiveContainer>
                <Navigator />
                <VideoItemContainer
                  data-testid="videoItemDetails"
                  isInDarkMode={isInDarkMode}
                >
                  {renderDifferentViews()}
                </VideoItemContainer>
              </ResponsiveContainer>
            </MainContainer>
          )
        }}
      </CustomContext.Consumer>
    )
  }
}

export default VideoItemDetails
